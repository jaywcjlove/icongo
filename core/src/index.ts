import path from 'path';
import fs from 'fs-extra';
import { transform } from '@svgr/core';
import { recursiveReaddirFiles } from 'recursive-readdir-files';

/**
 * Converts a string to pascal case.
 * 
 * @example
 * 
 * ```js
 * toPascalCase('some_database_field_name'); // 'SomeDatabaseFieldName'
 * toPascalCase('Some label that needs to be pascalized');
 * // 'SomeLabelThatNeedsToBePascalized'
 * toPascalCase('some-javascript-property'); // 'SomeJavascriptProperty'
 * toPascalCase('some-mixed_string with spaces_underscores-and-hyphens');
 * // 'SomeMixedStringWithSpacesUnderscoresAndHyphens'
 * ```
 */
export const toPascalCase = (str: string = '') =>
  str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    ?.map(x => x.charAt(0).toUpperCase() + x.slice(1).toLowerCase())
      .join('');

export interface SvgToReactOption {
  source: string;
  output: string;
  prefix: string;
  filter: string;
}


export async function svgToReact(options: SvgToReactOption) {
  await fs.ensureDir(options.output);
  const svgFiles = await recursiveReaddirFiles(options.source, { include: /(\.svg)$/ });

  const names = svgFiles.map(m => {
    const filename = toPascalCase(path.basename(m.path, '.svg'))!;
    return `${options.prefix || ''}${filename}`;
  });
  const outputFile = path.resolve(options.output, `names.json`);

  await fs.writeFile(outputFile, JSON.stringify(names, null, 2));

  svgFiles.forEach(async (file) => {
    if (options.filter && new RegExp(options.filter).test(file.path)) {
      return
    }
    const filename = toPascalCase(path.basename(file.path, '.svg'))!;
    const str = (await fs.readFile(file.path)).toString()
    const prefixName = `${options.prefix || ''}${filename}`;
    const outputFile = path.resolve(options.output, `${prefixName}.tsx`);
    const indexFile = path.resolve(options.output, `index.tsx`);

    await fs.appendFile(indexFile, `export * from './${prefixName}';\n`);
    const svgStr = await transform(str, {
      icon: true,
      jsxRuntime: 'automatic',
      typescript: true,
      namedExport: prefixName,
      exportType: 'named',
    }, { componentName: prefixName });
    fs.writeFile(outputFile, svgStr, (error) => {
      if (error) {
        return Promise.reject(error)
      }
      const baseOutdir = path.relative(options.output, outputFile);
      console.log(`\x1b[32;1m✔\x1b[0m ${path.basename(file.path)} -> \x1b[37;1m${baseOutdir}\x1b[0m `);
    });
  });
}
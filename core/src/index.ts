import path from 'path';
import fs from 'fs-extra';
import { transform, Config } from '@svgr/core';
import { recursiveReaddirFiles, IFileDirStat } from 'recursive-readdir-files';

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
  rename?: Record<string, string>;
  config?: Config;
}

const getFileName = (prefix: string, filename: string) => `${prefix || ''}${filename}`;

export async function svgToReact(options: SvgToReactOption) {
  await fs.ensureDir(options.output);
  const svgFiles = await recursiveReaddirFiles(options.source, { include: /(\.svg)$/ });
  writeFile(svgFiles, 0, options);
}

/**
 * JetPack.svg     --->  JetPack.tsx
 * Jet-Pack.svg    --->  JetPack2.tsx
 */
const nameCache: string[] = [];
const nameWarn: Record<string, string> = {};

const names: string[] = [];
const indexFileContent: string[] = [];

async function writeFile(files: IFileDirStat[] = [], index: number, options: SvgToReactOption) {
  const file = files[index];
  if (!file) return;
  if (options.filter && new RegExp(options.filter).test(file.path)) {
    writeFile(files, index + 1, options);
    return;
  }

  const basename = path.basename(file.path, '.svg');
  const filename = toPascalCase(basename)!;
  const str = (await fs.readFile(file.path)).toString()
  let prefixName = getFileName(options.prefix, filename);
  if (nameCache.includes(filename.toLocaleLowerCase())) {
    nameWarn[basename] = prefixName;
  }
  nameCache.push(filename.toLocaleLowerCase());
  if (options.rename && options.rename[basename]) {
    prefixName = options.rename[basename];
  }

  names.push(prefixName);
  indexFileContent.push(`export * from './${prefixName}';`);

  const outputFile = path.resolve(options.output, `${prefixName}.tsx`);

  const svgStr = await transform(str, {
    icon: true,
    jsxRuntime: 'automatic',
    typescript: true,
    namedExport: prefixName,
    exportType: 'named',
    jsx: {
      babelConfig: {
        babelrc: true
      }
    },
    ...options.config
  }, { componentName: prefixName });

  await fs.writeFile(outputFile, svgStr)
  const baseOutdir = path.relative(process.cwd(), outputFile);
  console.log(`\x1b[32;1m✔\x1b[0m ${path.basename(file.path)} -> \x1b[37;1m${baseOutdir}\x1b[0m `);

  if (files.length === index + 1) {
    const namePath = path.resolve(options.output, `names.json`)
    await fs.writeFile(namePath, JSON.stringify(names, null, 2));
    console.log(`\x1b[32;1m✔\x1b[0m -> \x1b[37;1m${path.relative(process.cwd(), namePath)}\x1b[0m `);

    const indexPath = path.resolve(options.output, `index.tsx`);
    await fs.writeFile(indexPath, indexFileContent.join('\n'));
    console.log(`\x1b[32;1m✔\x1b[0m -> \x1b[37;1m${path.relative(process.cwd(), indexPath)}\x1b[0m `);

    if (Object.keys(nameWarn).length > 0) {
      console.warn('⚠️\x1b[33;1m Rename:\x1b[0m', nameWarn, '=>', options.rename)
    }
  }
  writeFile(files, index + 1, options);
}
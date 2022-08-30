import path from 'path';
import fs from 'fs-extra';
import { transform, Config } from '@svgr/core';
import { recursiveReaddirFiles, IFileDirStat } from 'recursive-readdir-files';
import { loadConfig } from 'svgo';
import svgoPlugin from '@svgr/plugin-svgo'
import jsxPlugin from '@svgr/plugin-jsx';
import prettierPlugin from '@svgr/plugin-prettier'

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
  const svgoConfig = await loadConfig();
  if (!options.config) options.config = {};
  if (svgoConfig) {
    options.config.svgo = true;
    options.config.svgoConfig = svgoConfig;
  }
  writeFile(svgFiles, 0, options);
}

/**
 * JetPack.svg     --->  JetPack.tsx
 * Jet-Pack.svg    --->  JetPack2.tsx
 */
const nameCache: string[] = [];
const nameWarn: Record<string, string> = {};
const nameToBase: Record<string, string[]> = {};

const names: string[] = [];
const indexFileContent: string[] = [];

async function writeFile(files: IFileDirStat[] = [], index: number, options: SvgToReactOption) {
  try {
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
      ...options.config,
      plugins: [
        (code, config, state) => {
          const { plugins, ...other } = config;
          code = svgoPlugin(code, other, state);
          code = jsxPlugin(code, other, state);
          code = prettierPlugin(code, other, state);
          return code;
        }
      ],
    }, { componentName: prefixName });
  
    names.push(prefixName);
    indexFileContent.push(`export * from './${prefixName}';`);
    nameToBase[prefixName] = [options.prefix, `${basename}.svg`];
  
    const outputFile = path.resolve(options.output, `${prefixName}.tsx`);
  
    await fs.writeFile(outputFile, svgStr)
    const baseOutdir = path.relative(process.cwd(), outputFile);
    console.log(`\x1b[32;1m✔\x1b[0m \x1b[34;1m${path.basename(file.path)}\x1b[0m -> \x1b[37;1m${baseOutdir}\x1b[0m `);
  
    if (files.length === index + 1) {
      const namePath = path.resolve(options.output, `names.json`);
      await fs.writeFile(namePath, JSON.stringify(names, null, 2));
      console.log(`\x1b[32;1m✔\x1b[0m -> \x1b[37;1m${path.relative(process.cwd(), namePath)}\x1b[0m `);
      
      const nameBasePath = path.resolve(options.output, `data.json`);
      await fs.writeFile(nameBasePath, JSON.stringify(nameToBase, null, 2));
      console.log(`\x1b[32;1m✔\x1b[0m -> \x1b[37;1m${path.relative(process.cwd(), nameBasePath)}\x1b[0m `);
  
      const indexPath = path.resolve(options.output, `index.tsx`);
      await fs.writeFile(indexPath, indexFileContent.join('\n'));
      console.log(`\x1b[32;1m✔\x1b[0m -> \x1b[37;1m${path.relative(process.cwd(), indexPath)}\x1b[0m `);
  
      if (Object.keys(nameWarn).length > 0) {
        console.warn('⚠️\x1b[33;1m Rename:\x1b[0m', nameWarn, '=>', options.rename)
      }
    }
    writeFile(files, index + 1, options);
  } catch (error) {
    const file = files[index];
    if (error instanceof Error) {
      const basename = path.basename(file.path, '.svg');
      const filename = toPascalCase(basename)!;
      console.log(`\x1b[31;1m✘ ::ERR::\x1b[0m ${basename} \x1b[33;1m${filename}\x1b[0m -> \x1b[35;1m${error.message}\x1b[0m`);
    }
    writeFile(files, index + 1, options);
  }
}
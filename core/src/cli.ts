#!/usr/bin/env node
import minimist from 'minimist';
import { ParsedArgs } from 'minimist';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import { SvgToReactOption, svgToReact } from './index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface RunArgvs extends Omit<ParsedArgs, '_'> , SvgToReactOption {
  version: boolean;
  help: boolean;
}

export const cliHelp: string = `\n  Usage: icongo [options] [--help|h]

  Options:\n
    --output, -o            Output the svg icon component to the specified directory. Default: "components"
    --source, -s            svg icon folder. Default: "icons"
    --prefix                SVG component name prefix.
    --filter                Matching some icons does not generate components.
    --rename, -r            Icon rename E.g: '{\"jet-pack\": \"JetPack1\"}'.
    --version, -v           Show version number
    --help, -h              Displays help information.

  Example:
    \x1b[35mnpm\x1b[0m icongo \x1b[33m--output\x1b[0m components
    \x1b[35mnpm\x1b[0m icongo \x1b[33m--source\x1b[0m icons
    \x1b[35mnpm\x1b[0m icongo \x1b[33m-s\x1b[0m svg \x1b[33m-o\x1b[0m src -r '{\"jet-pack\": \"JetPack1\"}'
    \x1b[35mnpm\x1b[0m icongo \x1b[33m--source\x1b[0m icons \x1b[33m--filter\x1b[0m='(calendar).svg'
    \x1b[35mnpm\x1b[0m s2r \x1b[33m--source\x1b[0m icons
`;

const argvs = minimist<RunArgvs>(process.argv.slice(2), {
  alias: {
    help: 'h',
    version: 'v',
    source: 's',
    output: 'o',
    rename: 'r',
  },
  default: {
    version: false,
    help: false,
    source: 'icons',
    output: 'components',
  },
});

;(async () => {
  try {
    const pkg = await fs.readJSON(path.resolve(__dirname, '../package.json'));
    if (argvs.version) {
      console.log(`\n  \x1b[35m${pkg.name}\x1b[0m v${pkg.version}\n`);
      return pkg.version;
    }
    if (argvs.h || argvs.help) {
      console.log(`${cliHelp}`);
      console.log(`  Version: ${pkg.version}\n`);
      return;
    }
    argvs.source = path.resolve(argvs.source);
    argvs.output = path.resolve(argvs.output);
  
    try {
      argvs.rename = JSON.parse(String(argvs.rename));
    } catch (error) {
      argvs.rename = {}
    }
  
    svgToReact(argvs);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`IconGo ERR: ${error.message}`);
    }
  }
})();
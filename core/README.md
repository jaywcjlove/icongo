icongo
===

[![CI](https://github.com/jaywcjlove/icongo/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/icongo/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/icongo.svg)](https://www.npmjs.com/package/icongo)

Easily include popular icons in your React projects and provide an easy tool to convert `svg` into React components.

**All Packages**

| Name | NPM Version | Website |
| ----- | ----- | ----- |
| `@icongo/bi` | [![npm version](https://img.shields.io/npm/v/@icongo/bi.svg)](https://www.npmjs.com/package/@icongo/bi) | [`#preview`](https://icongo.github.io/#/icons/boxicons/) |
| `@icongo/bs` | [![npm version](https://img.shields.io/npm/v/@icongo/bs.svg)](https://www.npmjs.com/package/@icongo/bs) | [`#preview`](https://icongo.github.io/#/icons/bootstrap/) |
| `@icongo/di` | [![npm version](https://img.shields.io/npm/v/@icongo/di.svg)](https://www.npmjs.com/package/@icongo/di) | [`#preview`](https://icongo.github.io/#/icons/devicons/) |
| `@icongo/go` | [![npm version](https://img.shields.io/npm/v/@icongo/go.svg)](https://www.npmjs.com/package/@icongo/go) | [`#preview`](https://icongo.github.io/#/icons/octiconsicons/) |
| `@icongo/sti` | [![npm version](https://img.shields.io/npm/v/@icongo/sti.svg)](https://www.npmjs.com/package/@icongo/sti) | [`#preview`](https://icongo.github.io/#/icons/supertinyicons/) |
| `@icongo/vsc` | [![npm version](https://img.shields.io/npm/v/@icongo/vsc.svg)](https://www.npmjs.com/package/@icongo/sti) | [`#preview`](https://icongo.github.io/#/icons/vsc/) |

## Usage

```jsx
import { DIAndroid } from "@icongo/di";

function Demo() {
  return (
    <DIAndroid />
  )
}
```

## icongo

```bash
npm i icongo
```

```shell
Usage: icongo [options] [--help|h]

Options:

  --output, -o            Output the svg icon component to the specified directory. Default: "components"
  --source, -s            svg icon folder. Default: "icons"
  --prefix                SVG component name prefix.
  --filter                Matching some icons does not generate components.
  --version, -v           Show version number
  --help, -h              Displays help information.

Example:
  npm icongo --output components
  npm icongo --source icons
  npm s2r --source icons
```

**Usage**

```json
{
  "name": "@wcjiang/icons",
  "version": "0.0.1",
  "main": "./lib/index.js",
  "module": "./esm/index.js",
  "types": "./lib/index.d.ts",
  "scripts": {
    "build": "tsbb build",
    "start": "icongo --prefix BS --source data/icons -o ./src"
  },
  "devDependencies": {
    "icongo": "*",
    "tsbb": "^3.7.6"
  }
}
```

## License

Licensed under the MIT License.
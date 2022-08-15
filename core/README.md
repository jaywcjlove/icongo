IconGo
===

[![npm version](https://img.shields.io/npm/v/icongo.svg)](https://www.npmjs.com/package/icongo)
[![Github](https://img.shields.io/github/stars/jaywcjlove/icongo?logo=github)](https://github.com/jaywcjlove/icongo)
[![CI](https://github.com/jaywcjlove/icongo/actions/workflows/ci.yml/badge.svg)](https://github.com/jaywcjlove/icongo/actions/workflows/ci.yml)
[![Docker Image Version (latest by date)](https://img.shields.io/docker/v/wcjiang/icongo?logo=docker)](https://hub.docker.com/r/wcjiang/icongo)
[![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/wcjiang/icongo?logo=docker)](https://hub.docker.com/r/wcjiang/icongo)

Easily include popular icons in your React projects and provide an easy tool to convert `svg` into React components.

**All Packages**

| Name | NPM Version | Website |
| ----- | ----- | ----- |
| `@icongo/bi` | [![npm version](https://img.shields.io/npm/v/@icongo/bi.svg)](https://www.npmjs.com/package/@icongo/bi) | [`#preview`](https://icongo.github.io/#/icons/boxicons/) |
| `@icongo/bs` | [![npm version](https://img.shields.io/npm/v/@icongo/bs.svg)](https://www.npmjs.com/package/@icongo/bs) | [`#preview`](https://icongo.github.io/#/icons/bootstrap/) |
| `@icongo/di` | [![npm version](https://img.shields.io/npm/v/@icongo/di.svg)](https://www.npmjs.com/package/@icongo/di) | [`#preview`](https://icongo.github.io/#/icons/devicons/) |
| `@icongo/fc` | [![npm version](https://img.shields.io/npm/v/@icongo/fc.svg)](https://www.npmjs.com/package/@icongo/fc) | [`#preview`](https://icongo.github.io/#/icons/fc/) |
| `@icongo/fg` | [![npm version](https://img.shields.io/npm/v/@icongo/fg.svg)](https://www.npmjs.com/package/@icongo/fg) | [`#preview`](https://icongo.github.io/#/icons/fg/) |
| `@icongo/fi` | [![npm version](https://img.shields.io/npm/v/@icongo/fi.svg)](https://www.npmjs.com/package/@icongo/fi) | [`#preview`](https://icongo.github.io/#/icons/fi/) |
| `@icongo/gi` | [![npm version](https://img.shields.io/npm/v/@icongo/gi.svg)](https://www.npmjs.com/package/@icongo/gi) | [`#preview`](https://icongo.github.io/#/icons/gameicons/) |
| `@icongo/go` | [![npm version](https://img.shields.io/npm/v/@icongo/go.svg)](https://www.npmjs.com/package/@icongo/go) | [`#preview`](https://icongo.github.io/#/icons/octiconsicons/) |
| `@icongo/hi` | [![npm version](https://img.shields.io/npm/v/@icongo/hi.svg)](https://www.npmjs.com/package/@icongo/hi) | [`#preview`](https://icongo.github.io/#/icons/hi/) |
| `@icongo/md` | [![npm version](https://img.shields.io/npm/v/@icongo/md.svg)](https://www.npmjs.com/package/@icongo/md) | [`#preview`](https://icongo.github.io/#/icons/md/) |
| `@icongo/pk` | [![npm version](https://img.shields.io/npm/v/@icongo/pk.svg)](https://www.npmjs.com/package/@icongo/pk) | [`#preview`](https://icongo.github.io/#/icons/pk/) |
| `@icongo/ri` | [![npm version](https://img.shields.io/npm/v/@icongo/ri.svg)](https://www.npmjs.com/package/@icongo/ri) | [`#preview`](https://icongo.github.io/#/icons/ri/) |
| `@icongo/scwi` | [![npm version](https://img.shields.io/npm/v/@icongo/scwi.svg)](https://www.npmjs.com/package/@icongo/scwi) | [`#preview`](https://icongo.github.io/#/icons/scwi/) |
| `@icongo/si` | [![npm version](https://img.shields.io/npm/v/@icongo/si.svg)](https://www.npmjs.com/package/@icongo/si) | [`#preview`](https://icongo.github.io/#/icons/si/) |
| `@icongo/sti` | [![npm version](https://img.shields.io/npm/v/@icongo/sti.svg)](https://www.npmjs.com/package/@icongo/sti) | [`#preview`](https://icongo.github.io/#/icons/supertinyicons/) |
| `@icongo/tb` | [![npm version](https://img.shields.io/npm/v/@icongo/tb.svg)](https://www.npmjs.com/package/@icongo/tb) | [`#preview`](https://icongo.github.io/#/icons/tb/) |
| `@icongo/uiw` | [![npm version](https://img.shields.io/npm/v/@icongo/uiw.svg)](https://www.npmjs.com/package/@icongo/uiw) | [`#preview`](https://icongo.github.io/#/icons/uiw/) |
| `@icongo/vsc` | [![npm version](https://img.shields.io/npm/v/@icongo/vsc.svg)](https://www.npmjs.com/package/@icongo/vsc) | [`#preview`](https://icongo.github.io/#/icons/vsc/) |

## Usage

```jsx
import { DIAndroid } from "@icongo/di";
import { STIApple } from '@icongo/sti/lib/STIApple';

function Demo() {
  return (
    <div>
      <STIApple />
      <DIAndroid />
    </div>
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
  --rename, -r            Icon rename E.g: '{"jet-pack": "JetPack1"}'.
  --config, -c            SVGR supports project configuration files for SVGR, SVGO and Prettier.
  --version, -v           Show version number
  --help, -h              Displays help information.

Example:
  npm icongo --output components
  npm icongo --source icons
  npm icongo --source icons --config='{"svgProps": {"viewBox": "0 0 20 20"}}'
  npm icongo -s svg -o src -r '{"jet-pack": "JetPack1"}'
  npm icongo --source icons --filter='(calendar).svg'
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

## Docker

The Icons search website can be deployed to your personal server via docker.

```shell
docker pull wcjiang/icongo
# Or
docker pull ghcr.io/jaywcjlove/icongo:latest
```

```shell
docker run --name icongo --rm -d -p 9112:80 wcjiang/icongo:latest
# Or
docker run --name icongo -itd -p 9112:80 wcjiang/icongo:latest
# Or
docker run --name icongo -itd -p 9112:80 ghcr.io/jaywcjlove/icongo:latest
```

Visit the following URL in your browser:

http://localhost:9112/

## License

Licensed under the MIT License.
icongo
===

SVG icon to react component.

## Install

```bash
npm i svgtofont
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

## Usage

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

### License

Licensed under the MIT License.
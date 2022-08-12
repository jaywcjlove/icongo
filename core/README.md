svg-to-react-component
===

SVG icon to react component.

## Install

```bash
npm i svgtofont
```

```shell
Usage: svg-to-react-component [options] [--help|h]

Options:

  --output, -o            Output the svg icon component to the specified directory. Default: "components"
  --source, -s            svg icon folder. Default: "icons"
  --prefix                SVG component name prefix.
  --filter                Matching some icons does not generate components.
  --version, -v           Show version number
  --help, -h              Displays help information.

Example:
  npm svg-to-react-component --output components
  npm svg-to-react-component --source icons
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
    "start": "svg-to-react-component --prefix BS --source data/icons -o ./src"
  },
  "devDependencies": {
    "svg-to-react-component": "*",
    "tsbb": "^3.7.6"
  }
}
```

### License

Licensed under the MIT License.
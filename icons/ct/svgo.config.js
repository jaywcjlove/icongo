
/** @type {import('svgo').Config} */
module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    {
      name: "removeAttrs",
      params: {
        attrs: "(stroke-linejoin)"
      }
    },
    {
      name: 'removeAttrs',
      fn: (ast, params, info) => {
        delete ast.children[0]?.attributes['id'];
        delete ast.children[0]?.attributes['y'];
        delete ast.children[0]?.attributes['x'];
        delete ast.children[0]?.attributes['version'];
        delete ast.children[0]?.attributes['style'];
        delete ast.children[0]?.attributes['xml:space'];
        delete ast.children[0]?.attributes['xmlns:xlink'];
      },
    }
  ]
}

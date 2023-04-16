
/** @type {import('svgo').Config} */
module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'convertColors',
    'reusePaths',
    {
      name: "removeAttrs",
      params: {
        attrs: "(stroke-linejoin|block-progression|xlinkHref)"
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
        ast.children[0]?.children.forEach((item) => {
          if (item.name === 'a') {
            ast.children[0].children = [...item.children];
          }
          if (item.name === 'path') {
            const str = item.attributes['style'];
            if (str) {
              item.attributes['style'] = str.replace(/block-progression:tb;-inkscape-font-specification:Sans/g, ``);
            }
          }
        });
      },
    }
  ]
}

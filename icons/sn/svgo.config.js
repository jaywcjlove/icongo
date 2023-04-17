const REG = /(block-progression:tb'?)/g;
const attrREG = /(vectornator:layerName)/g;

function modify(children = []) {
  return children.map((item) => {
    const str = item.attributes?.['style'];
    if (str && REG.test(str)) {
      item.attributes['style'] = str.replace(REG, '');
    }
    if (attrREG.test(Object.keys(item.attributes || {}).join(','))) {
      delete item.attributes['vectornator:layerName'];
    }
    if (item.children) {
      item.children = modify(item.children);
    }
    return item;
  });
}

/** @type {import('svgo').Config} */
module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeComments',
    'removeDimensions',
    'cleanupAttrs',
    {
      name: 'removeAttrs',
      fn: (ast, params, info) => {
        delete ast.children[0]?.attributes['style'];
        delete ast.children[0]?.attributes['xml:space'];
        delete ast.children[0]?.attributes['xmlns:vectornator'];
        ast.children[0]?.children.forEach((item) => {
          if (item.name === 'a') {
            ast.children[0].children = [...item.children];
          }
        });
        ast.children = modify(ast.children)
      },
    }
  ]
}

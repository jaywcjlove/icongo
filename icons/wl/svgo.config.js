const REG = /(block-progression:tb;?|-inkscape-font-specification:(Sans|Helvetica Neue Bold|Bitstream Vera Sans|Open Sans Bold);?)/g;
const attrREG = /(onclick)/g;

function modify(children = []) {
  return children.map((item) => {
    const str = item.attributes?.['style'];
    if (str && REG.test(str)) {
      item.attributes['style'] = str.replace(REG, '');
    }
    if (attrREG.test(Object.keys(item.attributes || {}).join(','))) {
      delete item.attributes['onclick'];
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
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: ['height="1em"', 'width="1em"']
      }
    },
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

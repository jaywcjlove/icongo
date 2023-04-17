const REG = /(enable-background:accumulate;?|-inkscape-font-specification:Open Sans;?|block-progression:tb;?|-inkscape-font-specification:Sans;?|-inkscape-font-specification:'Open Sans Bold';?|writing-mode:lr-tb;?|enable-background:new;?|color-interpolation-filters:linearRGB;?|solid-opacity:1;?|color-interpolation-filters:sRGB|color-interpolation-filters:linearRGB;?|solid-color:#000;?)/g

function modify(children = []) {
  return children.map((item) => {
    const str = item.attributes?.['style'];
    if (str && REG.test(str)) {
      item.attributes['style'] = str.replace(REG, '');
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

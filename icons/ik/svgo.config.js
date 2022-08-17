module.exports = {
  multipass: true,
  js2svg: {
    indent: 2, // string with spaces or number of spaces. 4 by default
    pretty: true, // boolean, false by default
  },
  plugins: [
    'removeTitle',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'aria-labelledby'
      }
    },
    {
      name: 'addAttributesToElement',
      type: 'visitor',
      params: {
        attributes: {
          stroke: "#2329D6",
          'stroke-width': "1.2",
          'stroke-linecap': "square",
          'stroke-linejoin': "miter",
          'fill': "none",
        },
      },
      fn: (ast, params, info) => {
        const attributes = params.attributes;
        return {
          element: {
            enter: (node, parentNode) => {
              if (/(polygon|polyline|path|rect|circle)/i.test(node.name)) {
                for (const attribute in attributes) {
                  node.attributes[attribute] = attributes[attribute];
                }
              }
            }
          }
        }
      },
    }
  ],
}
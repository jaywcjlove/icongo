module.exports = {
  plugins: [
    'removeHiddenElems',
    'removeStyleElement',
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    'cleanupIDs',
    'cleanupAttrs',
    'collapseGroups',

    'convertPathData',
    'removeDesc',
    'removeUselessDefs',
    'removeTitle'
  ],
}
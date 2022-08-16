module.exports = {
  plugins: [
    'cleanupIDs',
    'cleanupAttrs',
    'collapseGroups',
    {
      name: 'removeUnknownsAndDefaults',
      params: {
        keepDataAttrs: false
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'path:fill'
      }
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'polygon:fill'
      }
    },
  ],
}
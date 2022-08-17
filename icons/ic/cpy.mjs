import cpy from 'cpy';

;(async () => {
  await cpy('data/azure-cds/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/src/outline/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
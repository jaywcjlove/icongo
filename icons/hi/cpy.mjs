import cpy from 'cpy';

;(async () => {
  await cpy('data/src/solid/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/src/outline/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
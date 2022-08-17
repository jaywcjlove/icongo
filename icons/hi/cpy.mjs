import cpy from 'cpy';

;(async () => {
  await cpy('data/src/solid/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/src/outline/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
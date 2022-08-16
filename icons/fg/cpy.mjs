import cpy from 'cpy';

;(async () => {
  await cpy('data/flags/1x1/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/flags/4x3/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-1`
  })
})();
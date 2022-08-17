import cpy from 'cpy';

;(async () => {
  await cpy('data/package/icons/fill/svg/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/package/icons/outline/svg/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
import cpy from 'cpy';

;(async () => {
  await cpy('data/flat/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/flat-rounded/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-rounded`
  })
  await cpy('data/logo/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/logo-border/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-border`
  })
  await cpy('data/mono/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/mono-outline/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
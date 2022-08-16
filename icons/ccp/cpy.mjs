import cpy from 'cpy';

;(async () => {
  await cpy('data/flat/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/flat-rounded/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-rounded`
  })
  await cpy('data/logo/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/logo-border/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-border`
  })
  await cpy('data/mono/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/mono-outline/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-outline`
  })
})();
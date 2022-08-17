import cpy from 'cpy';

;(async () => {
  await cpy('data/svg/filled/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/svg/outlined/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-outlined`
  })
  await cpy('data/svg/round/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-round`
  })
  await cpy('data/svg/sharp/*.svg', 'svg', {
    flat: true,
    rename: basename => `${basename}-sharp`
  })
})();
import cpy from 'cpy';

;(async () => {
  await cpy('data/svg/filled/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/svg/outlined/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-outlined`
  })
  await cpy('data/svg/round/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-round`
  })
  await cpy('data/svg/sharp/*.svg', '.cache_svg', {
    flat: true,
    rename: basename => `${basename}-sharp`
  })
})();
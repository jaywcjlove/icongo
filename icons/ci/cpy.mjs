import cpy from 'cpy';

;(async () => {
  await cpy('data/svg/brand/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/svg/flag/*.svg', '.cache_svg', {
    flat: true,
  })
  await cpy('data/svg/free/*.svg', '.cache_svg', {
    flat: true,
  })
})();
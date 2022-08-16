import cpy from 'cpy';

;(async () => {
  await cpy('data/svg/brand/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/svg/flag/*.svg', 'svg', {
    flat: true,
  })
  await cpy('data/svg/free/*.svg', 'svg', {
    flat: true,
  })
})();
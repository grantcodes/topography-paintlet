import test from 'ava'

import { getNoise } from '../lib/get-noise'

test('getNoise', t => {
  const noise1 = getNoise(0.522, 1)
  const noise2 = getNoise(0.522, 1)
  const noise3 = getNoise(0.522, 3)
  const noise4 = getNoise(1.211, 5)

  // Make sure between 0 and 1
  t.truthy(noise1 > 0 && noise1 < 1)
  t.truthy(noise2 > 0 && noise2 < 1)
  t.truthy(noise3 > 0 && noise3 < 1)
  t.truthy(noise4 > 0 && noise4 < 1)

  // Make sure it generates the same number with same input
  t.is(noise1, noise2)
})

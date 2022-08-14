import test from 'ava'

import { randomInt, radians } from '../lib/helpers'

test('randomInt', t => {
  t.is(randomInt(2, 2), 2)
  const res = randomInt(20, 200)
  t.truthy(res >= 20 && res <= 200)
  t.truthy(Number.isInteger(res))
})

test('radians', t => {
  t.is(radians(30), 0.5235987756)
  t.is(radians(90), 1.570796327)
  t.is(radians(-270), -4.71238898)
})

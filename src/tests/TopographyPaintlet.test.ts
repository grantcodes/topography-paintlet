import test from 'ava'

import { TopographyPaintlet } from '../lib/TopographyPaintlet'

test('TopographyPaintlet', t => {
  t.notThrows(() => new TopographyPaintlet())
})

import test from 'ava'

import { getShapes } from '../lib/get-shapes'

test('getShapes', t => {
  const shapes = getShapes(7)

  // Make sure it generates the given number of shapes
  t.is(shapes.length, 7)

  // Make sure shapes are an array of objects like {x, y}
  t.assert(Array.isArray(shapes[0]))
  const firstPoint = shapes[0][0]
  t.is(typeof firstPoint, 'object')
  t.assert('x' in firstPoint)
  t.assert('y' in firstPoint)
})

// @ts-expect-error
import { Noise } from 'noisejs'
import { randomInt } from './helpers'
import { NOISE_DELTA, NOISE_RADIUS } from './consts'

const noise = new Noise(Math.random())

const ox = randomInt(1, 10000)
const oy = randomInt(1, 10000)

// Get a noise value between 0 and 1
function getNoise (radian: number, layer: number): number {
  const dim = layer * NOISE_DELTA
  const TAU = 2 * Math.PI
  let r = radian % TAU
  if (r < 0.0) {
    r += TAU
  }
  let val: number = noise.perlin2(
    ox + Math.cos(r) * (NOISE_RADIUS + dim / 200),
    oy + Math.sin(r) * (NOISE_RADIUS + dim / 200)
  )
  val = (val + 1) / 2
  return val
}

export { getNoise }

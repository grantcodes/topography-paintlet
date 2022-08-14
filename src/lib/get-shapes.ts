import { radians } from './helpers'
import { getNoise } from './get-noise'
import { SIZE, ANGLE_START, ANGLE_END, ANGLE_COUNT } from './consts'
import { ShapePoint, Shape } from '../types'

const shapes: Shape[] = []

function getShapes (count: number): Shape[] {
  if (shapes.length === count) {
    return shapes
  }

  const magnitude = SIZE / count // Bigger number = bigger rings

  // Create array of angles for the shape.
  const angles: number[] = []
  for (let ang = ANGLE_START; ang <= ANGLE_END; ang = ang + 90 / ANGLE_COUNT) {
    angles.push(ang)
  }

  // Create arrays of points for each shape for each layer.
  for (let layerI = 0; layerI < count; layerI++) {
    const reverseLayerI = count - layerI
    const shape: Shape = angles.map(
      (angle: number): ShapePoint => {
        const rad = radians(angle)
        const noiseVal = getNoise(rad, reverseLayerI)
        const newRadius = noiseVal * reverseLayerI * magnitude
        const x = Math.min(newRadius * Math.cos(rad), SIZE)
        const y = Math.min(newRadius * Math.sin(rad), SIZE)

        return { x, y }
      }
    )

    shapes.push(shape)
  }

  return shapes
}

export { getShapes }

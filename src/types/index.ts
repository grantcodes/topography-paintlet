type ShapeCorner = 'top left' | 'top right' | 'bottom left' | 'bottom right'

interface ShapePoint {
  x: number
  y: number
}

type Shape = ShapePoint[]

export { ShapeCorner, ShapePoint, Shape }

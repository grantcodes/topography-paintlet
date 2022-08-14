import { SIZE, DEFAULT_COLORS, CSS_CUSTOM_PROPERTIES } from './consts'
import { radians } from './helpers'
import { getShapes } from './get-shapes'
import { ShapeCorner, ShapePoint } from '../types'

interface PaintSize {
  width: number
  height: number
}

class TopographyPaintlet {
  static get inputProperties (): string[] {
    return Object.values(CSS_CUSTOM_PROPERTIES)
  }

  static get contextOptions (): any {
    return { alpha: true }
  }

  paint (
    ctx: CanvasRenderingContext2D,
    size: PaintSize,
    properties: any
  ): void {
    const maxSize = Math.min(size.width, size.height)

    // Get colors from --topography-colors property.
    let colors = DEFAULT_COLORS
    const colorsString: string =
      properties.get(CSS_CUSTOM_PROPERTIES.colors)?.toString() ?? ''
    const commaRegex = /(?:(["'])(\\.|(?!\1)[^\\])*\1|\[(?:(["'])(\\.|(?!\2)[^\\])*\2|[^\]])*\]|\((?:(["'])(\\.|(?!\3)[^\\])*\3|[^)])*\)|[^,])+/g // eslint-disable-line no-useless-backreference
    const matches = colorsString.match(commaRegex)
    if (Array.isArray(matches)) {
      colors = matches.map((c: string) => c.trim()).filter((c: string) => c)
    }

    const layerCount = colors.length

    // Get positioning form --topography-corner property.
    const corner: ShapeCorner =
      properties
        .get(CSS_CUSTOM_PROPERTIES.corner)
        ?.toString()
        ?.trim() ?? 'top right'

    // Define where the shapes start from
    const zeroPoint: ShapePoint = { x: 0, y: 0 }

    // Load the shapes into the class property to cache them.
    const shapes = getShapes(layerCount)

    // Scale the image to fit the given size
    const scaleAmount = maxSize / SIZE
    ctx.scale(scaleAmount, scaleAmount)

    const canvasWidth = size.width / scaleAmount
    const canvasHeight = size.height / scaleAmount

    // Rotate to fit the correct corner.
    if (corner === 'top right') {
      ctx.rotate(radians(90))
      ctx.translate(0, 0 - canvasWidth)
    } else if (corner === 'bottom right') {
      ctx.rotate(radians(180))
      ctx.translate(0 - canvasWidth, 0 - Math.max(SIZE, canvasHeight))
    } else if (corner === 'bottom left') {
      ctx.rotate(radians(270))
      ctx.translate(0 - Math.max(SIZE, canvasHeight), 0)
    }

    // Draw a path for each layer.
    let layerI = 0
    for (const shape of shapes) {
      const color = colors[layerI]
      ctx.fillStyle = color
      // Move to start position
      ctx.moveTo(zeroPoint.x, zeroPoint.y)

      // Transform offscreen if enter property set.
      // TODO: This could be used to create an entry animation for the shapes.
      // const enter = properties.get('--topography-enter')?.toString();
      // if (enter) {
      //   const percent = parseInt(enter);
      //   if (percent) {
      //     const shapeEnterStart = (100 / layerCount) * layerI;
      //     const shapeProgress = Math.min(
      //       (percent - shapeEnterStart) * layerCount,
      //       100
      //     );
      //     const amount =
      //       shapeProgress > 0
      //         ? maxSize - (shapeProgress / 100) * maxSize
      //         : maxSize;
      //     ctx.translate(amount, 0 - amount);
      //   }
      // }

      // Start the path.
      ctx.beginPath()

      // Draw curves between the points
      let pointI = 0
      for (const point of shape) {
        const nextPoint =
          shape[pointI < shape.length - 1 ? pointI + 1 : shape.length - 1]
        const xc = (point.x + nextPoint.x) / 2
        const yc = (point.y + nextPoint.y) / 2

        ctx.quadraticCurveTo(point.x, point.y, xc, yc)
        pointI++
      }

      // Finish off the shape by going back to the start position.
      ctx.lineTo(zeroPoint.x, zeroPoint.y)
      ctx.fill()

      ctx.closePath()
      layerI++
    }
  }
}

export { TopographyPaintlet }

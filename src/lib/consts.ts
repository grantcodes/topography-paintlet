export const NOISE_RADIUS = 0.2 // Smaller = smoother
export const NOISE_DELTA = 20 // Bigger number = less circular

export const SIZE = 100 // Make the shape 100x100 then transform and scale it to where it needs to go later on.
export const ANGLE_START = 0 // Starting angle.
export const ANGLE_END = 90 // Ending angle. Designed to be used in a corner so it's always 90deg.
export const ANGLE_COUNT = 5 // The number of points in the curve that make up the layer shape.

export const DEFAULT_COLORS = [
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.2)',
  'rgba(0,0,0,.2)'
]

export const CSS_CUSTOM_PROPERTIES = {
  colors: '--topography-colors',
  corner: '--topography-corner'
}

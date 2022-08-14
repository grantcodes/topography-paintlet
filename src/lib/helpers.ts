/**
 * Helper function to get a random integer between 2 given values
 * @param min Minimum possible integer
 * @param max Maximum possible integer
 * @returns Random integer
 */
const randomInt = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)

/**
 * Helper function to convert degrees number to radians rounded to 10 decimal places
 * @param deg Degrees number to convert to radians
 * @returns Number in radians
 */
const radians = (deg: number): number => {
  const res = (deg * Math.PI) / 180
  return parseFloat(res.toPrecision(10))
}

export { randomInt, radians }

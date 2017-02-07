/**
 * Expose srand
 */

module.exports = srand

/**
 * srand
 */

function srand (seed) {
  // If we're passed a string, condense it down
  // into a number
  if (typeof seed === 'string') {
    str = seed
    seed = 0xFF
    for (var i = 0; i < seed.length; i++) {
      s ^= seed.charCodeAt(i)
    }
  }

  return function (max, min) {
    max = max || 1
    min = min || 0
    seed = (seed * 9301 + 49297) % 233280

    return min + (seed / 233280) * (max - min)
  }
}

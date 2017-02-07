/**
 * Imports
 */

var srand = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var r = srand(1)
  t.equal(r(), 0.2511917009602195)
  t.equal(r(), 0.5453317901234568)

  t.equal(srand('test')(), 0.5011574074074074)
  t.end()
})

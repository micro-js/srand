
# srand

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Seeded random number generator using a [linear congruential generator](https://en.wikipedia.org/wiki/Linear_congruential_generator). This is **NOT** cryptographically secure.

## Installation

    $ npm install @f/srand

## Usage

```js
var srand = require('@f/srand')

var rand = srand(4)

rand()
rand()
rand()
```

## API

### srand(seed)

- `seed` - RNG seed. May be integer or string.

**Returns:** A function that, when called, generates the next random number in the sequence.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/srand.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/srand
[git-image]: https://img.shields.io/github/tag/micro-js/srand.svg?style=flat-square
[git-url]: https://github.com/micro-js/srand
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/srand.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/srand

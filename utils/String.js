'use strict'

const isInteger = (value) => {
  return /^-{0,1}\d+$/.test(value)
}

module.exports = {
  isInteger
}

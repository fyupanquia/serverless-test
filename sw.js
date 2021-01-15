'use strict'
const { get: SWget } = require('./providers/SW')
const { _200, _400 } = require('./network/response')

module.exports.planets = async (event) => {
  if (event.pathParameters || !event.pathParameters.ID) { _400({ message: 'Missing the ID' }) }

  const planet = await SWget('planets', event.pathParameters.ID)

  return _200(planet)
}

module.exports.species = async (event) => {
  if (event.pathParameters || !event.pathParameters.ID) { _400({ message: 'Missing the ID' }) }

  const specie = await SWget('planets', event.pathParameters.ID)
  return _200(specie)
}

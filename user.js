'use strict'
const { list, save } = require('../providers/User')
const { _200, _400 } = require('./network/response')

module.exports.save = async (event) => {
  let bodyObj = {}

  try {
    bodyObj = JSON.parse(event.body)
  } catch (jsonErr) {
    console.log('There was an error parsing the body', jsonErr)
  }

  const data = await save({
    name: bodyObj.name || null,
    last_name: bodyObj.last_name || null,
    age: bodyObj.age || null
  })

  return _200(data)
}

module.exports.list = async (event) => {
  if (event.pathParameters || !event.pathParameters.ID) { _400({ message: 'Missing the ID' }) }

  const data = await list(event.pathParameters.ID)
  return _200(data)
}

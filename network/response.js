'use strict'
const Diccionary = require('../utils/Diccionary')

const { parseKeys } = Diccionary('es')

const { isInteger } = require('../utils/String')
const Response = {
  _200 (data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 200,
      body: JSON.stringify(parseKeys(data))
    }
  },
  _400 (data = {}) {
    return {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
      },
      statusCode: 400,
      body: JSON.stringify(parseKeys(data))
    }
  },
  send ({ req, res, status, body }) {
    status = isInteger(status) ? status : 200
    body = body || {}

    return res.status(status).send(parseKeys(body))
  }
}

module.exports = Response

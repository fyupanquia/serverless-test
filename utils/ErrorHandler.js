'use strict'
const { config, defaultBy } = require('../config')
const { send } = require('../network/response')

const general = (err, req, res, next) => {
  let DEFAULT_HTTP_ERROR = 500
  const {  message, stack } = err
  const rsp = {
    success: false,
    message: config.env === 'development' ? message : defaultBy.ERROR_MESSAGE
  }

  if (config.env === 'development') {
    rsp.stack = stack
  } else {
    console.log('ErrorHandler: ', err)
  }

  return send({
    req,
    res,
    status: DEFAULT_HTTP_ERROR,
    body: rsp
  })
}

const badRequest = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.sendStatus(400) // Bad request
  }
  next()
}

const notFound = (req, res, next) => {
  return res.sendStatus(404)
}

const fatalError = (err) => {
  console.error(`${err.message}`)
  console.error(err.stack)
  process.exit(1)
}

module.exports = {
  general,
  badRequest,
  notFound,
  fatalError
}

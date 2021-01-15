const express = require('express')
const helmet = require('helmet')
const app = express()
const { config } = require('./config')
const sw = require('./api/sw')
const u = require('./api/u')
const cors = require('cors')
const bodyParser = require('body-parser')
const ErrorHandler = require('./utils/ErrorHandler')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())
app.use(ErrorHandler.badRequest)
app.use(haltOnTimedout)
app.use('/sw', sw)
app.use('/u', u)
app.use('*', ErrorHandler.notFound)
app.use(ErrorHandler.general)

function haltOnTimedout (req, res, next) {
  if (!req.timedout) next()
}

process.on('uncaughtException', ErrorHandler.fatalError)
process.on('unhandledRejection', ErrorHandler.fatalError)

if (!module.parent) {
  app.listen(config.appPort, function () {
    console.log(`Listening on port ${config.appPort}!`)
  })
}

module.exports = app

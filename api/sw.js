'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const { get: SWget } = require('../providers/SW')
const { send } = require('../network/response')

// LIST
api.get('/planets/:id', async (req, res, next) => {
  try {
    const data = await SWget('planets', req.params.id)

    return send({
      req,
      res,
      body: {
        ...data
      }
    })
  } catch (error) {
    return next(error, req, res, next)
  }
})

api.get('/species/:id', async (req, res, next) => {
  try {
    const data = await SWget('species', req.params.id)

    return send({
      req,
      res,
      body: {
        ...data
      }
    })
  } catch (error) {
    return next(error, req, res, next)
  }
})

module.exports = api

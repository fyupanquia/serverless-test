'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const api = asyncify(express.Router())
const { list, save } = require('../providers/User')
const { send } = require('../network/response')

// LIST
api.post('/', async (req, res, next) => {
  try {
    const data = await save(req.body)
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

api.get('/:id', async (req, res, next) => {
  try {
    const data = await list(req.params.id)

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

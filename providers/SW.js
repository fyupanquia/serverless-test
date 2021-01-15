'use strict'
const axios = require('axios')
const { config } = require('../config')

const { url } = config.sw

const instance = axios.create({
  baseURL: `${url}`,
  headers: { 'Content-Type': 'application/json; charset=utf-8' }
})

const get = (action, id) => {
  return instance
    .get(`api/${action}/${id}/`)
    .then((rsp) => rsp.data)
    .catch((error) => {
      const response = error.response
      console.log(error)
      if (response) {
        const { message } = response
        throw new Error(message)
      }
      throw new Error('Unidentified error')
    })
}

module.exports = {
  get
}

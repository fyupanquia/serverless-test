'use strict'
const { v4: uuidv4 } = require('uuid')
const redis = require('redis')
const { config } = require('../config')
const client = redis.createClient({
  host: config.redis.host,
  port: config.redis.port,
  password: config.redis.password
})

client.on('error', function (error) {
  console.error(error)
})

const User = {
  save (data) {
    return new Promise((resolve, reject) => {
      const key = uuidv4()

      client.setex(key, config.redis.expire, JSON.stringify(data), () => {
		  resolve({
          id: key
        })
	  })
    })
  },
  list (key) {
    return new Promise((resolve, reject) => {
      client.get(key, (err, data) => {
        if (err) return reject(err)
        let res = data || null
        if (data) {
          res = JSON.parse(data)
        }
        return resolve(res)
      })
    })
  }
}
module.exports = User

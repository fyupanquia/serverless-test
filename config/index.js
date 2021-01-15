'use strict'
require('dotenv').config()

const config = {
  env: process.env.ENV || 'production',
  appPort: process.env.APP_PORT || '3001',
  sw: {
    url: process.env.SW_API_URL
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    expire: process.env.REDIS_EXPIRE || 20
  }
}

module.exports = {
  config
}

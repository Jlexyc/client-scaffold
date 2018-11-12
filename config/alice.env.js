const merge = require('webpack-merge')
const env = require('./default.env')

module.exports = merge(env, {
  NODE_ENV: '"dev"',
  HORIZON_SERVER: '"http://94.130.199.64:8000"',
  KEY_SERVER_ADMIN: '"http://94.130.199.64:8006"',
  NETWORK_PASSPHRASE: '"TokenD Developer Network"'
})

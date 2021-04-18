const secret = require('./secret')
const user = require('./user')

module.exports = {
  ...secret,
  ...user
}
const { AuthenticationError } = require('apollo-server')

const { dencrypt } = require('./auth')
const userRepository = require('../repositories/user')

module.exports = async ({ req }) => {
  let user

  if (req && req.headers && req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(' ')

    if (type === 'Bearer' && token) {
      const { data: { id } } = dencrypt(token)
      user = await userRepository.findById(id)
    }
  }

  return {
    user,
    validateUser() {
      if (!user) throw new AuthenticationError('Access denied, you must be authenticated')
    }
  }
}
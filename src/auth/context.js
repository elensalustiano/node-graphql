const { AuthenticationError } = require('apollo-server')

const { dencrypt } = require('./auth')
const userRepository = require('../repositories/user')

module.exports = async ({ req }) => {
  const token = req.headers.authorization
  if (!token) return {}

  const { data: { id } } = dencrypt(token)
  console.log('id: ', id)
  const user = await userRepository.findById(id)

  return {
    user,
    validateUser() {
      throw AuthenticationError('Access denied, you must be authenticated')
    }
  }
}
const { AuthenticationError } = require('apollo-server')

const userRepository = require('../../repositories/user')
const { encrypt, compareHash } = require('../../auth/auth')

const user = async (_, { userName, password }) => {
  const user = await userRepository.findOne(userName)
  const isValidPass = await compareHash(password, user.password)
  if (!isValidPass) throw AuthenticationError('User not found, check credentials')

  user.token = encrypt({ id: user._id })
  return user
}

const secrets = () => userRepository.findAll()

const secret = (_, { id }) => userRepository.findById(id)

module.exports = {
  user,
  secrets,
  secret,
}
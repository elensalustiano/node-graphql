const { AuthenticationError } = require('apollo-server')

const userRepository = require('../../repositories/user')
const { encrypt, compareHash } = require('../../auth/auth')

const user = async (_, { userName, password }) => {
  try {
    const user = await userRepository.findOne(userName)
    if (!user) throw Error()

    const isValidPass = await compareHash(password, user.password)
    if (!isValidPass) throw Error()

    user.token = encrypt({ id: user._id })
    return user
  } catch (_) {
    return new AuthenticationError('User not found, check credentials')
  }
}

const secrets = (_, _args, context) => {
  context && context.validateUser()
  return context.user.secrets
}

const secret = (_, { id }, context) => {
  context && context.validateUser()
  return context.user.secrets.find(el => el._id.toString() === id)
}

module.exports = {
  user,
  secrets,
  secret,
}
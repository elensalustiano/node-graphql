const userRepository = require('../../repositories/user')
const { encrypt, generateHash } = require('../../auth/auth')

const createUser = async (_, args) => {
  try {
    const { password } = args

    const passwordHash = await generateHash(password)
    const user = await userRepository.createUser({ ...args, password: passwordHash })
    user.token = encrypt({ id: user._id })

    return user
  } catch (error) {
    error.message = `Fail to register userName ${args.userName}. Check if user already exist.`
    return error
  }
}

const createSecret = async (_, args, context) => {
  context && context.validateUser()

  const { nModified } = await userRepository.addSecret(context.user._id, args)
  if (!nModified) throw Error(`Error to register secret ${args.title}`)

  return `Success to register secret ${args.title}`
}

const deleteSecret = async (_, { id }, context) => {
  context && context.validateUser()

  const { nModified } = await userRepository.deleteSecret(context.user._id, id)
  if (!nModified) throw Error(`Error to delete secret with id ${id}`)

  return `Success to delete secret with id ${id}`
}

module.exports = {
  createUser,
  createSecret,
  deleteSecret
}
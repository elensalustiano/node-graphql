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

module.exports = {
  createUser
}
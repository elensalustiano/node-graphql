const secretRepository = require('../../repositories/secret')

const createSecret = (_, args) => secretRepository.create(args)

const deleteSecret = async (_, { id }) => {
  try {
    const data = await secretRepository.findById(id)
    if (!data) throw Error(`Data not found for id ${id}`)

    await secretRepository.deleteById(id)
    return data
  } catch (error) {
    return error
  }
}

module.exports = {
  createSecret,
  deleteSecret
}
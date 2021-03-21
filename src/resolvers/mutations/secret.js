const secretRepository = require('../../repositories/secret')

const createSecret = (_, args) => secretRepository.create(args)

module.exports = {
  createSecret
}
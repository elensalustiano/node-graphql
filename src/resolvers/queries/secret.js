const secretRepository = require('../../repositories/secret')

const secrets = () => secretRepository.findAll()

const secret = (_, { id }) => secretRepository.findById(id)

module.exports = {
  secrets,
  secret,
}
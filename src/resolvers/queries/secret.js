const secretRepository = require('../../repositories/user')

const secrets = () => secretRepository.findAll()

const secret = (_, { id }) => secretRepository.findById(id)

module.exports = {
  secrets,
  secret,
}
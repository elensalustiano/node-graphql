const secretModel = require('../models/secret')

const create = async data => secretModel.create(data)

module.exports = {
  create
}

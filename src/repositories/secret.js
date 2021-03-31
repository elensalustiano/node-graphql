const secretModel = require('../models/secret')

const create = data => secretModel.create(data)

const findAll = () => secretModel.find()

const findById = id => secretModel.findById(id)

module.exports = {
  create,
  findAll,
  findById
}

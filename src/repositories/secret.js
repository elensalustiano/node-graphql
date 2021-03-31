const secretModel = require('../models/secret')

const create = data => secretModel.create(data)

const findAll = () => secretModel.find()

const findById = id => secretModel.findById(id)

const deleteById = id => secretModel.deleteOne({ _id: id })

module.exports = {
  create,
  findAll,
  findById,
  deleteById
}

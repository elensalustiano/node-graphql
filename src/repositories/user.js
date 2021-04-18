const userModel = require('../models/user')

const createUser = data => userModel.create(data)

const findOne = userName => userModel.findOne({ userName })

const findById = id => userModel.findById(id)

const deleteById = id => userModel.deleteOne({ _id: id })

module.exports = {
  createUser,
  findOne,
  findById,
  deleteById
}

const userModel = require('../models/user')

const createUser = data => userModel.create(data)

const findOne = userName => userModel.findOne({ userName })

const findById = id => userModel.findById(id)

const addSecret = (userId, secret) => userModel.updateOne(
  { _id: userId },
  { $push: { secrets: secret } }
)

const deleteSecret = (userId, secretId) => userModel.updateOne(
  { _id: userId },
  { $pull: { secrets: { _id: secretId } } }
)

module.exports = {
  createUser,
  findOne,
  findById,
  addSecret,
  deleteSecret
}

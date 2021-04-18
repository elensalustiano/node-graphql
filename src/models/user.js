const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  secrets: [{
    title: { type: String, required: true },
    secret: { type: String, required: true },
    accessName: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('users', schema)

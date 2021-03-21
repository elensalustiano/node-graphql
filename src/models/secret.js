const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  secret: { type: String, required: true },
  user: String,
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('secrets', schema)

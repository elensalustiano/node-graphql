const { sign, verify } = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const encrypt = data => sign({ data }, process.env.JWT_SECRET)

const dencrypt = token => verify(token, process.env.JWT_SECRET)

const generateHash = value => bcrypt.hash(value, 8)

const compareHash = (value, hash) => bcrypt.compare(value, hash)

module.exports = {
  encrypt,
  dencrypt,
  generateHash,
  compareHash
}
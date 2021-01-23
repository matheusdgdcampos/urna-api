const { Schema, model } = require('mongoose')

const Users = model(
  'users',
  new Schema({
    codigo: Number,
    voted: {
      default: false,
    },
  })
)

module.exports = Users

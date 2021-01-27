const { Schema, model } = require('mongoose')

const Users = model(
  'users',
  new Schema({
    codigo: Number,
    votou: {
      default: false,
    },
  })
)

module.exports = Users

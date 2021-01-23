const { Schema, model } = require('mongoose')

const Candidates = model(
  'candidates',
  new Schema({
    plate: String,
    code: Number,
    votes: Number,
  })
)

module.exports = Candidates

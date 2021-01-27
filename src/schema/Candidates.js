const { Schema, model } = require('mongoose')

const Candidates = model(
  'candidates',
  new Schema({
    chapa: String,
    codigo: Number,
    votos: Number,
  })
)

module.exports = Candidates

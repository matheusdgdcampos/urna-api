const { Schema, model } = require('mongoose')

const Candidates = model(
  'candidatos',
  new Schema({
    chapa: String,
    codigo: Number,
    votos: Number,
  })
)

module.exports = Candidates

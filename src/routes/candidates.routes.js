const { Router } = require('express')

const CandidatesController = require('../controllers/CandidatesController')

const candidatesRoutes = Router()
const candidatesController = new CandidatesController()

candidatesRoutes.put('/:_id/voto', candidatesController.increment)
candidatesRoutes.post('/cadastrar', candidatesController.create)

module.exports = candidatesRoutes

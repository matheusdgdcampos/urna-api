const { Router } = require('express')

const CandidatesController = require('../controllers/CandidatesController')

const candidatesRoutes = Router()
const candidatesController = new CandidatesController()

candidatesRoutes.put('/voto', candidatesController.increment)
candidatesRoutes.post('/cadastrar', candidatesController.create)

module.exports = candidatesRoutes

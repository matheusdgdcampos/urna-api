const { Router } = require('express')

const CandidatesController = require('../controllers/CandidatesController')

const candidatesRoutes = Router()
const candidatesController = new CandidatesController()

candidatesRoutes.put('/:_id/voto', candidatesController.update)
candidatesRoutes.post('/cadastrar', candidatesController.create)
candidatesRoutes.get('/', candidatesController.index)
candidatesRoutes.delete('/delete/:_id', candidatesController.delete)

module.exports = candidatesRoutes

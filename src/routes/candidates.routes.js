const { Router } = require('express')

const CandidatesController = require('../controllers/CandidatesController')

const candidatesRoutes = Router()
const candidatesController = new CandidatesController()

candidatesRoutes.post('/', candidatesController.increment)

module.exports = candidatesRoutes

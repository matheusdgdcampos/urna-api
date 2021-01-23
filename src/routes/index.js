const { Router } = require('express')

const candidatesRoutes = require('./candidates.routes')

const routes = Router()

routes.use('/candidates', candidatesRoutes)

module.exports = routes

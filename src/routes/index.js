const { Router } = require('express')

const candidatesRoutes = require('./candidates.routes')

const routes = Router()

routes.use('/candidatos', candidatesRoutes)

module.exports = routes

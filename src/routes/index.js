const { Router } = require('express')

const candidatesRoutes = require('./candidates.routes')
const userRoutes = require('./users.routes')

const routes = Router()

routes.use('/candidatos', candidatesRoutes)
routes.use('/users', userRoutes)

module.exports = routes

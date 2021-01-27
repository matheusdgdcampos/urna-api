const { Router } = require('express')

const candidatesRoutes = require('./candidates.routes')
const userRoutes = require('./users.routes')
const sessionRoutes = require('./auth.routes')

const routes = Router()

routes.use('/candidatos', candidatesRoutes)
routes.use('/users', userRoutes)
routes.use('/auth', sessionRoutes)

module.exports = routes

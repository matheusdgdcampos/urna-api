const { Router } = require('express')

const UsersController = require('../controllers/UsersController')

const userRoutes = Router()
const userController = new UsersController()

userRoutes.post('/create', userController.create)

module.exports = userRoutes

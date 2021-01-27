const CreateUserService = require('../services/CreateUser.service')

class UsersController {
  async create(request, response, next) {
    try {
      const { codigo } = request.body

      const createUser = new CreateUserService()

      const user = await createUser.execute(codigo)

      return response.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UsersController

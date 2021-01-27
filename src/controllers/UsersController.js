const CreateUserService = require('../services/CreateUser.service')

class UsersController {
  constructor() {
    this.createUser = new CreateUserService()
  }

  async create(request, response, next) {
    try {
      const { codigo } = request.body

      const user = await this.createUser.execute(codigo)

      return response.status(201).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UsersController

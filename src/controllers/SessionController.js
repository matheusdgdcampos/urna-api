const SessionService = require('../services/Session.service')

class SessionController {
  constructor() {
    this.session = new SessionService()
  }

  async auth(request, response, next) {
    try {
      const { codigo } = request.body

      const user = await this.session.execute(codigo)

      return response.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = SessionController

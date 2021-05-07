class AppError {
  constructor(
    message = '',
    statusCode = 400,
    sugestion = 'Sem sugestões disponíveis'
  ) {
    this.message = message
    this.statusCode = statusCode
    this.sugestion = sugestion
  }
}

module.exports = AppError

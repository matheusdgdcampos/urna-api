const Candidates = require('../schema/Candidates')
const AppError = require('../errors/AppError')

class CreateCandidateService {
  async execute({ chapa = '', codigo = 0 }) {
    const findCandidate = await Candidates.findOne({ codigo })

    if (findCandidate) {
      throw new AppError('Candidato já cadastrado!')
    }

    if (chapa === '' || codigo === 0) {
      throw new AppError('Insira um nome de chapa válido!')
    }

    const createCandidate = new Candidates({
      chapa,
      codigo,
      votos: 0,
    })

    await createCandidate.save()

    return createCandidate
  }
}

module.exports = CreateCandidateService

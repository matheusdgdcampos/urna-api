const Candidates = require('../schema/Candidates')
const AppError = require('../errors/AppError')

class DeleteCandidateService {
  async execute(candidateId = 0) {
    const findCandidate = await Candidates.findById(candidateId)

    if (!findCandidate) {
      throw new AppError('Candidato não cadastrado')
    }

    const excludeCandidate = new Candidates(findCandidate)

    await excludeCandidate.delete()

    const messageSuccess = new AppError('Candidato deletado com sucesso', 200)

    return messageSuccess
  }
}

module.exports = DeleteCandidateService

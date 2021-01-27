const Candidates = require('../schema/Candidates')
const User = require('../schema/Users')
const AppError = require('../errors/AppError')

class VoteCandidateService {
  async execute({ codigo = 0, userId = 0 }) {
    const findCandidate = await Candidates.findOne({ codigo })

    if (!findCandidate) {
      throw new AppError('Candidato não encontrado')
    }

    const findUser = await User.findById({ _id: userId })

    if (!findUser) {
      throw new AppError('Usuário não encontrado!')
    }

    findCandidate.votos += 1

    const votedCandidate = new Candidates(findCandidate)
    await votedCandidate.save()

    findUser.votou = true

    await new User(findUser).save()

    return votedCandidate
  }
}

module.exports = VoteCandidateService

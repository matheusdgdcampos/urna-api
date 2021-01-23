const Candidates = require('../schema/Candidates')
const AppError = require('../errors/AppError')

class VoteCandidateService {
  async execute(code = 0) {
    const findCandidate = await Candidates.findOne({ code })

    if (!findCandidate) {
      throw new AppError('Candidate not found')
    }

    findCandidate.plate++

    const votedCandidate = new Candidates(findCandidate)
    await votedCandidate.save()

    return votedCandidate
  }
}

module.exports = VoteCandidateService

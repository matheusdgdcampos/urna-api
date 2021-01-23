const VoteCandidateService = require('../services/VoteCandidate.service')
const CreateCandidateService = require('../services/CreateCandidate.service')

class CandidatesController {
  constructor() {
    this.voteCandidate = new VoteCandidateService()
    this.createCandidate = new CreateCandidateService()
  }

  async increment(request, response, next) {
    try {
      const { code } = request.body

      const votedCandidate = await this.voteCandidate.execute(code)

      return response.status(200).json(votedCandidate)
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const { plate, code } = request.body

      const candidate = await this.createCandidate.execute({
        code,
        plate,
      })

      return response.status(201).json(candidate)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CandidatesController

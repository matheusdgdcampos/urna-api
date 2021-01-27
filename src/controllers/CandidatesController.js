const VoteCandidateService = require('../services/VoteCandidate.service')
const CreateCandidateService = require('../services/CreateCandidate.service')

class CandidatesController {
  async increment(request, response, next) {
    try {
      const { codigo } = request.body
      const { _id } = request.params

      const voteCandidate = new VoteCandidateService()

      const votedCandidate = await voteCandidate.execute({
        codigo,
        userId: _id,
      })

      return response.status(200).json(votedCandidate)
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const { chapa, codigo } = request.body

      const createCandidate = new CreateCandidateService()

      const candidate = await createCandidate.execute({
        chapa,
        codigo,
      })

      return response.status(201).json(candidate)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CandidatesController

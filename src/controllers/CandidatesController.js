const VoteCandidateService = require('../services/VoteCandidate.service')

class CandidatesController {
  async increment(request, response, next) {
    try {
      const { code } = request.body

      const voteCandidate = new VoteCandidateService()

      const votedCandidate = await voteCandidate.execute(code)

      return response.status(200).json(votedCandidate)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CandidatesController

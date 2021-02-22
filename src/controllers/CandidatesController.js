const VoteCandidateService = require('../services/VoteCandidate.service')
const CreateCandidateService = require('../services/CreateCandidate.service')
const DeleteCandidateService = require('../services/DeleteCandidate.service')
const Candidate = require('../schema/Candidates')

class CandidatesController {
  async index(request, response, next) {
    try {
      const candidates = await Candidate.find()

      return response.json(candidates)
    } catch (error) {
      next(error)
    }
  }

  async update(request, response, next) {
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

  async delete(request, response, next) {
    const { _id } = request.params

    const deleteCandidate = new DeleteCandidateService()

    const messageStatus = await deleteCandidate.execute(_id)

    return response.status(200).json(messageStatus)
  }
}

module.exports = CandidatesController

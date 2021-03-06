const VoteCandidateService = require('../services/VoteCandidate.service')
const CreateCandidateService = require('../services/CreateCandidate.service')
const DeleteCandidateService = require('../services/DeleteCandidate.service')
const UpdateCandidateAvatarService = require('../services/UpdateCandidateAvatar.service')
const Candidate = require('../schema/Candidates')

class CandidatesController {
  async index(request, response, next) {
    try {
      const candidates = await Candidate.find()

      const parsedCandidates = candidates.map(candidate => {
        const parsed = {
          _id: candidate._id,
          chapa: candidate.chapa,
          codigo: candidate.codigo,
          avatar: `${process.env.BASE_URL}/picture/${candidate.avatar}`,
          votos: candidate.votos,
        }

        return parsed
      })

      return response.json(parsedCandidates)
    } catch (error) {
      next(error)
    }
  }

  async show(request, response, next) {
    try {
      const { _id } = request.params

      const candidate = await Candidate.findById(_id)

      const replacedCandidate = {
        _id: candidate._id,
        chapa: candidate.chapa,
        codigo: candidate.codigo,
        avatar: `${process.env.BASE_URL}/picture/${candidate.avatar}`,
        votos: candidate.votos,
      }

      return response.status(200).json(replacedCandidate)
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

  async avatar(request, response, next) {
    try {
      const { _id } = request.params
      const fileName = request.file.filename

      const updateCandidateAvatar = new UpdateCandidateAvatarService()

      const updatedCandidate = await updateCandidateAvatar.execute({
        candidateId: _id,
        filename: fileName,
      })

      return response.status(200).json(updatedCandidate)
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const { chapa, codigo } = request.body
      const filename = request.file.filename

      const createCandidate = new CreateCandidateService()

      const candidate = await createCandidate.execute({
        chapa,
        codigo,
        avatar: filename,
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

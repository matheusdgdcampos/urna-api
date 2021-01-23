const Candidates = require('../schema/Candidates')
const AppError = require('../errors/AppError')

class CreateCandidateService {
  async execute({ plate = '', code = 0 }) {
    const findCandidate = await Candidates.findOne({ code })

    if (findCandidate) {
      throw new AppError('Candidate already exists')
    }

    if (plate === '' || code === 0) {
      throw new AppError('The plate must be a valid name')
    }

    const createCandidate = new Candidates({
      plate,
      code,
      votes: 0,
    })

    await createCandidate.save()

    return createCandidate
  }
}

module.exports = CreateCandidateService

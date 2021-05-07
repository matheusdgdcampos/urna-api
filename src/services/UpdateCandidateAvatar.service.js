const Candidates = require('../schema/Candidates')
const AppError = require('../errors/AppError')
const {
  transformImageFileInBase64URI,
} = require('../utils/transformImageFileInBase64URI')

class UpdateCandidateAvatarService {
  async execute({ originalFileName = '', candidateId = 0, imageBuffer }) {
    const candidateExists = await Candidates.findById(candidateId)

    if (!candidateExists) {
      throw new AppError('Candidato não cadastrado')
    }

    const imageUri = transformImageFileInBase64URI(
      originalFileName,
      imageBuffer
    )

    if (imageUri) {
      candidateExists.avatar = imageUri

      const updatedCandidate = new Candidates(candidateExists)

      await updatedCandidate.save()

      return updatedCandidate
    }

    throw new AppError(
      'Não foi possível atualizar foto do candidato.',
      400,
      'Somente é permitido arquivos de imagem com extensão .jpeg ou .png.'
    )
  }
}

module.exports = UpdateCandidateAvatarService

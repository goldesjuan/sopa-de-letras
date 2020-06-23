import BoardParser from '../models/BoardParser.js'
import SopaDeLetrasSolver from '../solvers/SopaDeLetrasSolver.js'
import { HttpError, httpStatusCodes } from '../errors/HttpError.js'

class SopaDeLetrasApi {

  constructor() {
    this.parser = new BoardParser()
    this.solver = new SopaDeLetrasSolver()
  }

  async resolverSopasDeLetras(data) {
    try {
      this.validate(data)

      const { stream, word } = data
      const boardsAsStreams = this.parseChunks(stream)

      const boards = boardsAsStreams.map(s => this.parseBoard(s))
      const results = boards.map(b => this.solver.count(b, word))
      return results
    }
    catch (err) {
      if (!err.httpCode) {
        throw new HttpError(httpStatusCodes.INTERNAL_SERVER, 'Internal server error')
      }
      throw err
    }
  }

  parseChunks = (stream) => {
    const trimmed = stream.trim()
    const chunks = trimmed.split('\n\n')
    return chunks
  }

  parseBoard = (stream) => {
    const boardData = stream.split('\n')
    const board = this.parser.parse(boardData)
    return board
  }

  validate = (data) => {
    if (!data || !data.stream || !data.word) {
      throw new HttpError(httpStatusCodes.BAD_REQUEST, 'Invalid Request Body format')
    }
  }
}

export default SopaDeLetrasApi

import { httpStatusCodes, HttpError } from '../errors/HttpError.js'

class BoardParser {
  parse = (boardLines) => {
    const header = boardLines.shift()
    const size = this.#parseWidthHeight(header)
    this.#validateBoardSize(size)

    const board = []
    for (const line of boardLines) {
      board.push(line.split(``))
    }
    this.#validateBoard(board, size)
    return board
  }

  #parseWidthHeight = (line) => {
    const [height, width] = line.split(` `)
    return { width: parseInt(width), height: parseInt(height) }
  }

  #validateBoard = (board, { width, height }) => {
    if (board.length !== height) {
      throw new HttpError(httpStatusCodes.BAD_REQUEST, `board height does not match given height!`)
    }
    for (const row of board) {
      if (row.length !== width) {
        throw new HttpError(httpStatusCodes.BAD_REQUEST, `board width does not match given width!`)
      }
      if (row.includes('') || row.includes(' ')) {
        throw new HttpError(httpStatusCodes.BAD_REQUEST, `invalid character on board!`)
      }
    }
  }

  #validateBoardSize = ({ width, height }) => {
    if (width < 0 || width > 100) {
      throw new HttpError(httpStatusCodes.BAD_REQUEST, `invalid board width!`)
    }
    if (height < 0 || height > 100) {
      throw new HttpError(httpStatusCodes.BAD_REQUEST, `invalid board height!`)
    }
  }
}

export default BoardParser

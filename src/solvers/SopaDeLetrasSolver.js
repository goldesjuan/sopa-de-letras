const ORIENTATIONS = new Map([
  ['up', [-1, 0]],
  ['down', [1, 0]],
  ['left', [0, -1]],
  ['right', [0, 1]],
  ['rightDown', [1, 1]],
  ['leftDown', [1, -1]],
  ['rightUp', [-1, 1]],
  ['leftUp', [-1, -1]]
])

class SopaDeLetrasSolver {

  count = (board, word) => {
    this.board = board

    if (word.length === 1) {
      return this.#countSingleLetter(word)
    } else {
      return this.#countWord(word)
    }
  }

  #countSingleLetter = (letter) => {
    let count = 0
    for (const row of this.board) {
      for (const cell of row) {
        if (this.#areEqual(cell, letter)) {
          count++
        }
      }
    }
    return count
  }

  #countWord = (word) => {
    let count = 0
    const startingLetter = word[0]
    for (const [rowIndex, row] of this.board.entries()) {
      for (const [colIndex, letter] of row.entries()) {
        if (this.#areEqual(letter, startingLetter)) {
          count += this.#countInEveryDirection(rowIndex, colIndex, word)
        }
      }
    }
    return count
  }

  #countInEveryDirection = (rowIndex, colIndex, word) => {
    let count = 0
    for (const ori of ORIENTATIONS.keys()) {
      const substr = this.#getSubstring(rowIndex, colIndex, ORIENTATIONS.get(ori), word.length)
      count += this.#areEqual(substr, word) ? 1 : 0
    }
    return count
  }

  #areEqual = (string1, string2) => {
    return string1.toLowerCase() === string2.toLowerCase()
  }

  #getSubstring = (r, c, [rowIncrement, colIncrement], length) => {
    const aux = []
    let rowIndex = r
    let colIndex = c
    while (aux.length < length &&
      this.#withinVerticalBounds(rowIndex) &&
      this.#withinHorizontalBounds(colIndex)) {
      aux.push(this.board[rowIndex][colIndex])
      colIndex += colIncrement
      rowIndex += rowIncrement
    }
    return aux.join(``)
  }

  #withinVerticalBounds = (rowIndex) => {
    return 0 <= rowIndex && rowIndex < this.board.length
  }

  #withinHorizontalBounds = (colIndex) => {
    return 0 <= colIndex && colIndex < this.board[0].length
  }
}

export default SopaDeLetrasSolver

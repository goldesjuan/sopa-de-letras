const ORIENTATIONS = new Map([
  ['up', [-1,0]],
  ['down', [1,0]],
  ['left', [0,-1]],
  ['right', [0,1]],
  ['rightDown', [1,1]],
  ['leftDown', [1,-1]],
  ['rightUp', [-1,1]],
  ['leftUp', [-1,-1]]
])

class SopaDeLetras {
  constructor(board) {
    this.board = board
  }

  count(word) {
    let count = 0
    const startingLetter = word[0]
    const current = [0, 0]
    for (const [rowIndex, row] of this.board.entries()) {
      for (const [colIndex, letter] of row.entries()) {
        if (letter === startingLetter) {
          if (word.length === 1) {
            count++
          } else {
            for (const ori of ORIENTATIONS.keys()) {
              const found = this.getSubstring(rowIndex, colIndex, ORIENTATIONS.get(ori), word.length)
              count += found === word ? 1 : 0
            }
          }
        }
      }
    }
    return count
  }

  getSubstring(r, c, [rInc, cInc], length) {
    const aux = []
    let ri = r
    let ci = c
    while (aux.length < length &&
      this.withinVerticalBounds(ri) &&
      this.withinHorizontalBounds(ci)) {
      aux.push(this.board[ri][ci])
      ci += cInc
      ri += rInc
    }
    return aux.join(``)
  }

  withinVerticalBounds(ri) {
    return 0 <= ri && ri < this.board.length
  }

  withinHorizontalBounds(ci) {
    return 0 <= ci && ci < this.board[0].length
  }
}

export default SopaDeLetras

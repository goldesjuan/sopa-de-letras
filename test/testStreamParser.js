import BoardParser from '../src/services/BoardParser.js'
import SopaDeLetrasSolver from '../src/services/SopaDeLetrasSolver.js'
import chai from 'chai'
const expect = chai.expect

describe(`stream Parser`, () => {
  it(`should return 4 chunks when passing:
      xx
      xx

      xx
      xx

      xx
      xx

      xx
      xx`, () => {
    const stream = '3 3\nOIE\nIIX\nEXE\n\n1 10\nEIOIEIOEIO\n\n5 5\nEAEAE\nAIIIA\nEIOIE\nAIIIA\nEAEAE\n'
    const trimmed = stream.trim()
    const chunks = trimmed.split('\n\n')
    const results = []

    const parser = new BoardParser()
    const solver = new SopaDeLetrasSolver()

    for (const chunk of chunks) {
      const splitChunk = chunk.split('\n')
      const board = parser.parse(splitChunk)
      const count = solver.count(board, `oIE`)
      results.push(count)
    }
    expect(results[0]).to.equal(3)
    expect(results[1]).to.equal(4)
    expect(results[2]).to.equal(8)
  })
})

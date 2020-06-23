import BoardParser from '../src/services/BoardParser.js'
import SopaDeLetrasSolver from '../src/services/SopaDeLetrasSolver.js'
import chai from 'chai'
const expect = chai.expect

describe(`boardParser`, () => {
  it(`should return 8 when passing:
      'oIE'
        to:
        5 5
        eaeae
        aiiia
        eiOie
        aiiia
        eaeae`, () => {
    const stream = '5 5\neaeae\naiiia\neiOie\naiiia\neaeae'
    const parser = new BoardParser()
    const parsed = stream.split('\n')
    const board = parser.parse(parsed)
    const solver = new SopaDeLetrasSolver()
    const count = solver.count(board, `oIE`)
    expect(count).to.equal(8)
  })
})

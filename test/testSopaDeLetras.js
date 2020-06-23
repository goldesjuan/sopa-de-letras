import SopaDeLetrasSolver from '../src/solvers/SopaDeLetrasSolver.js'
import chai from 'chai'
const expect = chai.expect

describe(`Single letter horizontal search`, () => {
  it(`should return 0 when passing 'a' and asking for 'x'`, () => {
    const contenido = [[`a`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`x`)
    expect(count).to.equal(0)
  })

  it(`should return 1 when passing 'a' and asking for 'a'`, () => {
    const contenido = [[`a`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`a`)
    expect(count).to.equal(1)
  })

  it(`should return 2 when passing 'axa' and asking for 'a'`, () => {
    const contenido = [[`a`, `x`, `a`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`a`)
    expect(count).to.equal(2)
  })
})

describe(`Horizontal search`, () => {
  it(`should return 2 when passig 'hiahi' and asking for 'hi'`, () => {
    const contenido = [[`h`, `i`, `a`, `h`, `i`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`hi`)
    expect(count).to.equal(2)
  })

  it(`should return 2 when passig 'gatogatoga' and asking for 'gatoga'`, () => {
    const contenido = [[`g`, `a`, `t`, `o`, `g`, `a`, `t`, `o`, `g`, `a`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`gatoga`)
    expect(count).to.equal(2)
  })

  it(`should return 2 when passig 'oieio' and asking for 'oie'`, () => {
    const contenido = [[`o`, `i`, `e`, `i`, `o`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`oie`)
    expect(count).to.equal(2)
  })
})

describe(`Horizontal + vertical search`, () => {
  it(`should return 2 when passing:
    'hi'
      to:
      hi
      ia`, () => {
    const contenido = [[`h`, `i`], [`i`, `a`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`hi`)
    expect(count).to.equal(2)
  })

  it(`should return 4 when passing:
    'hi'
      to:
      hi
      ia
      hi`, () => {
    const contenido = [[`h`, `i`], [`i`, `a`], [`h`, `i`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`hi`)
    expect(count).to.equal(4)
  })
})

describe(`Diagonal right-down`, () => {
  it(`should return 3 when passing:
    'oie'
      to:
      oie
      iix
      exe`, () => {
    const contenido = [[`o`, `i`, `e`], [`i`, `i`, `x`], [`e`, `x`, `e`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`oie`)
    expect(count).to.equal(3)
  })
})

describe(`Diagonal left-up`, () => {
  it(`should return 3 when passing:
    'oie'
      to:
      eix
      iix
      oxo`, () => {
    const contenido = [[`e`, `i`, `x`], [`i`, `i`, `x`], [`o`, `x`, `o`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`oie`)
    expect(count).to.equal(2)
  })
})

describe(`All directions`, () => {
  it(`should return 8 when passing:
    'oie'
      to:
      eaeae
      aiiia
      eioie
      aiiia
      eaeae`, () => {
    const contenido = [
      [`e`, `a`, `e`, `a`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `i`, `o`, `i`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `a`, `e`, `a`, `e`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`oie`)
    expect(count).to.equal(8)
  })
})

describe(`Case insensitive search`, () => {
  it(`should return 8 when passing:
    'oIE'
      to:
      eaeae
      aiiia
      eiOie
      aiiia
      eaeae`, () => {
    const contenido = [
      [`e`, `a`, `e`, `a`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `i`, `O`, `i`, `e`],
      [`a`, `i`, `i`, `i`, `a`],
      [`e`, `a`, `e`, `a`, `e`]]
    const solver = new SopaDeLetrasSolver(contenido)
    const count = solver.count(`oIE`)
    expect(count).to.equal(8)
  })
})

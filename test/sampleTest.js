import SopaDeLetras from '../src/SopaDeLetras.js'
import chai from 'chai'
const expect = chai.expect


describe(`Horizontal search`, () => {
  it(`should return 0 when passing 'a' and asking for 'x'`, () => {
    const contenido = [[`a`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`x`)
    expect(count).to.equal(0)
  })

  it(`should return 1 when passing 'a' and asking for 'a'`, () => {
    const contenido = [[`a`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`a`)
    expect(count).to.equal(1)
  })

  it(`should return 2 when passing 'axa' and asking for 'a'`, () => {
    const contenido = [[`a`, `x`, `a`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`a`)
    expect(count).to.equal(2)
  })

  it(`should return 2 when passig 'hiahi' and asking for 'hi'`, () => {
    const contenido = [[`h`, `i`, `a`, `h`, `i`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`hi`)
    expect(count).to.equal(2)
  })

  it(`should return 2 when passig 'gatogatoga' and asking for 'gatoga'`, () => {
    const contenido = [[`g`, `a`, `t`, `o`, `g`, `a`, `t`, `o`, `g`, `a`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`gatoga`)
    expect(count).to.equal(2)
  })

  it(`should return 2 when passig 'oieio' and asking for 'oie'`, () => {
    const contenido = [[`o`, `i`, `e`, `i`, `o`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`oie`)
    expect(count).to.equal(2)
  })
})

describe(`Horizontal + vertical search`, () => {
  it(`should return 2 when passing [[h, i],[i, a]]`, () => {
    const contenido = [[`h`, `i`], [`i`, `a`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`hi`)
    expect(count).to.equal(2)
  })

  it(`should return 4 when passing [[h, i],[i, a], [h, i]]`, () => {
    const contenido = [[`h`, `i`], [`i`, `a`], [`h`, `i`]]
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`hi`)
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
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`oie`)
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
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`oie`)
    expect(count).to.equal(2)
  })
})

describe(`Diagonal up-right & down-left`, () => {
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
    const sdl = new SopaDeLetras(contenido)
    const count = sdl.count(`oie`)
    expect(count).to.equal(8)
  })
})

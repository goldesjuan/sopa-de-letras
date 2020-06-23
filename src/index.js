import express from 'express'
import SopaDeLetras from './solvers/SopaDeLetrasSolver.js'
import SopaDeLetrasApi from './apis/SopaDeLtrasApi.js'

const app = express()
app.use(express.json())

app.post(`/sopadeletras/solucion`, async (req, res) => {
  try {
    const api = new SopaDeLetrasApi()
    const result = await api.resolverSopasDeLetras(req.body)
    res.json({ result })
  } catch (err) {
    res.status(err.httpCode).json({ errorCode: err.httpCode, message: err.message })
  }
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`App listening on the http://localhost:${PORT}`)
})

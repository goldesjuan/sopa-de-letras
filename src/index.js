import express from 'express'
import SopaDeLetrasApi from './apis/SopaDeLetrasApi.js'

const app = express()

app.set('view engine', 'jade');
app.use(express.json())

app.get('/sopadeletras', function(req, res) {
  res.render('index', { title: 'Sopa de letras' });
});

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

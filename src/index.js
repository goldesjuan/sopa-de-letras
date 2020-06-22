// const express = require('express');
import express from 'express'
import SopaDeLetras from './SopaDeLetras.js'

const app = express()
app.use(express.json());

app.get(`/hello`, async (req, res) => {
  try {
    res.json({ message: `Hello :)` });
  } catch (err) {
    res.send({error: `Error papá!`});
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening on the http://localhost:${PORT}`);
});

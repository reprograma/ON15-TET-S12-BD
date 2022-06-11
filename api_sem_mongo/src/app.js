const express = require('express')
const app = express()
require("dotenv").config()

app.use(express.json())

const musicaDb = []

app.post("/", (req, res) => {
    const { artista, album, titulo } = req.body
    const novaMusica = {
        artista, album, titulo, id: musicaDb.length
    }

    musicaDb.push(novaMusica)

    res.status(201).json(novaMusica)
})
<<<<<<< HEAD
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config()

app.use(express.json());
app.use(cors());

const musicDB = []


app.post("/", (request, response) => {
    const {artista, album, titulo} = request.body

    const newMusic = {
        artista, album, titulo, id: musicDB.length
    }

    musicDB.push(newMusic)

    response.status(201).json(newMusic)
})

app.get("/all", (request, response) => {
  
    response.status(200).json(musicDB)
=======
const express = require(`express`)

const app = express()

require('dotenv').config()

app.use(express.json())

const musicaDb = []

app.post("/", (request, response) => {
    /** musica
     * artista -> string
     * album -> string
     * titulo -> string
     */
    const { artista, album, titulo } = request.body

    const novaMusica = {
        artista, album, titulo, id: musicaDb.length
    }

    musicaDb.push(novaMusica)

    response.status(201).json(novaMusica)
})

app.get("/todas", (request, response) => {
    response.status(200).json(musicaDb)
>>>>>>> 39c12350c35b2ab19f68601962a22c5122a0b2ae
})

module.exports = app
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
})

module.exports = app
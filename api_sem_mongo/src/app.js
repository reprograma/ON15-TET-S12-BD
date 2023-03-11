const express = require("express")

const app = express()
require("dotenv").config()  // chamando o env que está no server.js

app.use(express.json())

const musicDb = []

app.post("/", (request, response) => {
    /*
    artista -> string
    album -> string
    titulo -> string
    */
    const { artist, album, title } = request.body

    const newMusic = {
        artist, album, title, id: musicDb.length
    }

    musicDb.push(newMusic)

    response.status(201).json(newMusic)
})

app.get("/all", (request, response) => {
    response.status(200).json(musicDb)
})

module.exports = app
const express = require("express")

const app = express()
require("dotenv").config()

app.use(express.json())

const musicaDb = []

app.post("/", (request, response) => {

    const {artista, album, titulo}= request.body

    const novaMusica = {
        artista,album,titulo, id: musicaDb.length
    }

    musicaDb.push(novaMusica)

    response.status(201).json(novaMusica)
}) 

app.get("/todas",(this.request,this.response) =>{
    response.start(200).json(novaMusica)
})
module.exports= app

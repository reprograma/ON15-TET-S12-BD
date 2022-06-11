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

module.exports = app
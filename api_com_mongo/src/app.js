const express = require("express")
require('dotenv').config() //pra habilitar o .env
const cors = require("cors")
const db = require("./database/mongooseConnect")
const musicRoutes = require("./routes/musicRoutes")

const app = require("../../api_sem_mongo/src/app")

app.use(express.json()) //parse
app.use(cors()) //liberar as rotas
db.connect()

app.use(musicRoutes)

module.exports = app

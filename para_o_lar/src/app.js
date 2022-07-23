
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const db = require('./database/mongooseConnect')

const app = express()
const artistRouter = require('./routes/artistRoutes')

// configuracao
app.use(express.json())
app.use(cors())

// base de dados
db.connect()

// rotas
app.use('artist', artistRouter)

module.exports = app


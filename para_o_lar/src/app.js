const express = require('express')
const cors = require('cors')
const db = require('./database/mongoConfig')

const app = express()

app.use(express.json())
app.use(cors())
db.connect()

const routes = require('./routes/artistas')
app.use('/artista', routes)

module.exports = app
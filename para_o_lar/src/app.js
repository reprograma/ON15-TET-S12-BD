const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./database/mongooseConnect')
const playlistRoutes = require('./routes/playlistRoutes')

const app = express()

app.use(express.json())
app.use(cors())

db.connect()

app.use(playlistRoutes)

module.exports = app
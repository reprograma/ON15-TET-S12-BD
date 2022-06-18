const express = require("express")
require('dotenv').config()

const cors = require('cors')
const db = require('./database/mongooseConnect')
const musicRoutes = require('./routes/musicRoutes')
const app = express()

app.use(express.json())
app.use(cors())
db.connect()

app.use(musicRoutes)

module.exports = app
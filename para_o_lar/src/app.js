const express = require('express')
require('dotenv').config()
const cors = require('cors')
const db = require('./database/mongooseConnect')
const artistaRoutes = require('./routes/artistaRoutes')


const app = express()


app.use(express.json())
app.use(cors())

db.connect()

app.use(artistaRoutes)

module.exports = app



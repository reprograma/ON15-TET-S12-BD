const express = require('express')
require('dotenv').config()

const cors = require('cors')
const db = require('./database/mongooseConnect')
const cartoonRoutes = require('./routes/cartoonRoutes')
const app = express()

app.use(express.json())
app.use(cors())
db.connect()

app.use(cartoonRoutes)

module.exports = app
const express = require ('express')
require ('dotenv').config()
const db = require('./database/mongooseConnect')

const cors = require('cors')

const musicaRoutes = require('./routes/musicaRoutes')
const app = express()


app.use(express.json())
app.use(cors())

db.connect() 
app.use(musicaRoutes)

module.exports = app
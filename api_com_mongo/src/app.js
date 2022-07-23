
const express = require('express') 
require('dotenv').config()
const cors = require('cors') 
const db = require('./database/mongooseConect')
const app = express() 
const musicRoutes = require('./routes/musicRoutes')
app.use(express.json()) 
app.use(cors())

db.connect() 
app.use(musicRoutes)

module.exports = app 


// const express = require('express')

// const cors = require('cors')
// const db = require('./database/mongooseConnect')
// const musicRoutes = require('./routes/musicRoutes')

// const app = express()

// // configuracao
// app.use(express.json())
// app.use(cors())

// // base de dados
// db.connect()

// // rotas
// app.use(musicRoutes)

// module.exports = app

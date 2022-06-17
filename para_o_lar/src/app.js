require("dotenv").config()
const cors = require("cors")
const express = require("express")
const db = require("./Database/mongooseConnect")
const artistasRoutes = require("./Routes/artistasRoutes")

const app = express()


app.use(cors())
app.use(express.json())
app.use(artistasRoutes)
db.connect()


  
module.exports = app
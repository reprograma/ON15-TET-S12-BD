const express = require("express");

require("dotenv").config();

const cors = require("cors");

const db = require("./database/mongooseConnect")
const musicRoutes = require("./routes/musicRoutes.js");

const app = express()



app.use(express.json())
app.use(cors())

db.connect()

app.use("/music", musicRoutes)

module.exports = app




const express = require("express")                   //IMPORTA EXPRESS
require("dotenv").config()                           //IMPORTA DOTENV
const cors = require("cors")                         //IMPORTA CORS 
const db = require("./database/mongooseConnect")     //IMPORTA O BANCO
const artistRoutes = require("./routes/artistsRoutes")

const app = express()                                //INICIALIZA APLICAÇÃO

//CONFIGURAÇÃO
app.use(express.json())                             //BODY PARSER DA APLICAÇÃO
app.use(cors())                                     //LIBERAR AS ROTAS

//BASE DE DADOS
db.connect()                                        //CHAMANDO O BANCO NO APP

//ROTAS
app.use("/artist", artistRoutes)                               

module.exports = app
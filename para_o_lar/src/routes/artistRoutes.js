//chamar o express para acessar o método Router
const express = require("express")
//chamar o controller 
const controller = require("../controllers/artistController")
//criar uma variavel para routes
const routes = express.Router()

//criar as rotas
routes.get("/artists", controller.findAllArtists)

routes.get("/filtrar/:id", controller.findById)

routes.post("/newArtist", controller.createArtist)

//exportar o routes 
module.exports = routes
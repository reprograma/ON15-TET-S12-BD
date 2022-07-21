const express = require('express')
const routes = express.Router()
const controller = require('../controller/artistas')

routes.get('/listar', controller.listar)
routes.get('/listar/:id', controller.getPorId)
routes.post('/cadastrar', controller.creatArtista)

module.exports = routes
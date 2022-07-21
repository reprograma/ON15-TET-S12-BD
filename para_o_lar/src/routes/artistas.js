const express = require('express')
const routes = express.Router()
const controller = require('../controller/artistas')

routes.get('/listar', controller.listarTodos)
routes.get('/listar/:id', controller.listarPorId)
routes.post('/cadastrar', controller.cadastrarArtista)

module.exports = routes
const controller = require('../controller/musicaController')
const express = require('express')
const router = express.Router()

router.post('/musica/criar',controller.criarMusica)
router.get('/musicas',controller.buscarTodasAsMusicas)
router.get('/artista/:id',controller.findById)





module.exports = router
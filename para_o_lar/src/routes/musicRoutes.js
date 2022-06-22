const controller = require('../controller/musicController')

const express = require('express')

const router = express.Router()

router.post("/musica/criar", controller.criarCadastroDeMusica)
router.get("/musicas", controller.todasMusicas)
router.get("/musica/:id", controller.buscarPorId)

module.exports = router
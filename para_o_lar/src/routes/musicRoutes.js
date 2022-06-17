const express = require('express')
const router = express.Router()
const controller = require('../controller/musicController')

router.post("/musica/criar", controller.createNewMusic)
router.get("/musicas", controller.findAllMusic)
router.get("/musica/pesquisar/",controller.findMusicByQuery)
router.get("/musica/pesquisarMusica",controller.findMusic)
router.delete("/musica/excluir/:id",controller.deleteMusicById)


module.exports = router
const express = require('express')
const router = express.Router()
const controller = require('../controller/musicController')

router.post("/musica/criar", controller.createNewMusic)
router.get("/musicas", controller.findAllMusic)



module.exports = router
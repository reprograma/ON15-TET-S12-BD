const controller = require('../controller/musicController')

const express = require('express')

const router = express.Router()

router.post("/music/create", controller.createMusic)
router.get("/musics", controller.findAllMusic)
router.get("/music", controller.findById)


module.exports = router

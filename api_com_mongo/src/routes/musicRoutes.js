const controller = require('../controller/musicController')

const express = require('express')

const router = express.Router()

router.post("/music/create", controller.createMusic)
router.get("/musics", controller.findAllMusic)
router.get("/musics/lounch_year", controller.findOneByLounchYear)
router.get("/musics/category/:name", controller.findByOneCategory)
router.get("/music/:id", controller.findById)

module.exports = router
const controller = require('../controller/artistaController')

const express = require('express')

const router = express.Router()


router.post("/artist/create", controller.createArtist)
router.get("/artists", controller.findAll)
router.get("/artist/:id", controller.findById)
router.get("/artist/name", controller.findByName)



module.exports = router
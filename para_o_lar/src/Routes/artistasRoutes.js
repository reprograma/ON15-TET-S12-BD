const controller = require("../Controller/artistasController")

const express = require("express")

const router = express.Router()

router.post("/artistas/create", controller.createArtistas)
router.get("/artistas/todas", controller.findAllArtistas)
router.get("/artistas/:id", controller.findById)

module.exports = router
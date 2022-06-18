const controller = require("../controller/artistController")

const express = require("express")

const router = express.Router()

router.post("/artist/create", controller.createArtist)
router.get("/artist", controller.findAllArtist)
router.get("/artist/:id", controller.findById)
router.get("/artist/name", controller.findByName)

module.exports = router
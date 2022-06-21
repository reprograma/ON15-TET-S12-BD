const controller = require("../controllers/artistController")

const express = require("express")
const router = express.Router()

router.post("/artist/new", controller.createArtist)

router.get("/artists", controller.findAllArtist)
router.get("/artist/:name", controller.findByName)
router.get("/artist/:id", controller.findById)

module.exports = router
const controller = require('../controllers/artistController')

const express = require('express')

const router = express.Router()

router.post("/artist/create", controller.createArtist)
router.get("/artists", controller.findAllArtist)
router.get("/artist/:nome", controller.findArtistByName)
router.get("/artists/:id", controller.findById)



module.exports = router
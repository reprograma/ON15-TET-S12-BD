const controller = require("../controllers/musicController")

const express = require("express")

const router = express.Router()

router.post("/music/create", controller.createMusic)
router.get("/musics", controller.findAllMusica)
router.get("/music/:id", controller.findById)
router.get("/anoLancamento", controller.findOneByLouchYear)


module.exports = router
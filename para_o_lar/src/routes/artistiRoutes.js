const controller = require("../controllers/artistiController")

const express = require("express")

const router = express.Router()

router.post("/artisti/create", controller.createArtisti)
router.get("/artistis", controller.findAllArtisti)
router.get("/artistis/:id", controller.findById)


module.exports = router
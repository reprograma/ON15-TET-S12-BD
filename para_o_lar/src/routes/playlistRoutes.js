const controller = require("../controllers/playlistController")

const express = require("express")

const router = express.Router()

router.post("/music/create", controller.createMusic);
router.get("/music/all", controller.findAll);
router.get("music/:id", controller.findById)


module.exports = router
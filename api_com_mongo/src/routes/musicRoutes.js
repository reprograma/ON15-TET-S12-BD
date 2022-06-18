const controller = require("../controllers/musicController.js")

const express = require("express");

const router = express.Router();

router.post("/new_music", controller.createMusic);

router.get("/all", controller.findAllMusic);



router.get("/artist_name", controller.findByArtist);

router.get("/category/:name", controller.findByOneCategory);

router.get("/id/:id", controller.findById)

module.exports = router

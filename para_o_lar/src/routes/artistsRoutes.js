const controller = require("../controllers/artistsController")

const express = require("express");

const router = express.Router();

router.post("/new_artist", controller.createArtist);

router.get("/all", controller.findAllArtists);

router.get("/occupation", controller.findByOccupation);

module.exports = router
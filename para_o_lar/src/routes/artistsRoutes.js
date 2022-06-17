const controller = require("../controllers/artistsController")

const express = require("express");

const router = express.Router();

router.post("/new_artist", controller.createArtist);

module.exports = router
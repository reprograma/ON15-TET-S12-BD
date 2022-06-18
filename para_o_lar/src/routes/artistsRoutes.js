const controller = require("../controllers/artistsController")

const express = require("express");

const router = express.Router();

router.post("/new_artist", controller.createArtist)
router.get("/all", controller.findAll)
router.get("/name", controller.findByName)
router.get("/ocuppation", controller.findByOccupation)
router.patch("/update_item/:id", controller.updateArtistItems);
router.put("/update_all/:id", controller.updateAllArtistItems);
router.get("/:id", controller.findById) 
router.delete("/delete/:id", controller.deleteArtist)

module.exports = router
const controller = require("../Controller/musicController")

const express = require("express")

const router = express.Router()

router.post("/music/creat", controller.createMusic)


module.exports = router

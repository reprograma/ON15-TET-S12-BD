const controller = require("../controller/artistController")
const express = require('express');
const router = express.Router();


router.get('/', controller.getAllArtist);
router.post('/', controller.createArtist);
router.get('/:id', controller.updateArtist)
router.put('/:id', controller.buscarArtist)



module.exports = router;
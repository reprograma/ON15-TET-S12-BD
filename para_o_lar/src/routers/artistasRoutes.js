const express = require('express');
const router = express.Router();

const controller = require('../controller/artistaController');

router.get('/', controller.listarArtistas);
router.post('/', controller.createArtista);
router.get('/:id',controller.buscarArtista);
router.put('/:id', controller.updateArtista);

module.exports = router;
const controller = require('../controller/cartoonController')

const express = require('express')

const router = express.Router()

router.post('/cartoon/create', controller.createCartoon)

router.get('/cartoons/all', controller.findAllCartoon)

router.get('/cartoon/by_name',controller.findCartoonByName)

router.get('/cartoon/:id', controller.findById)

module.exports = router
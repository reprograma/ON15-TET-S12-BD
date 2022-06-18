const controller = require('../controller/musicController')

const express = require('express')

const router = express.Router()

router.post('/music/create', controller.createMusic)

router.get('/musics', controller.findAllMusic)

router.get('/music/artist', controller.findByArtistName)

router.get('/musics/lounch_year', controller.findOneByLounchYear)

router.get('/music/category/:name', controller.findByCategory)

router.get('/music/:id', controller.findById)



module.exports = router
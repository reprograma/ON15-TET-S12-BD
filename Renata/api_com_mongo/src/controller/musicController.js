
const MusicModel = require('../models/musicModel')

const createMusic = async (req, res) => {
  const {
    artist,
    title,
    louncherYear,
    clipe,
    composer,
    category,
    images
  } = req.body

  if (!artist) {
    return res
      .status(400)
      .json({
        message: "O artista não pode estar vazio"
      })
  }
  try {
    const newMusic = new MusicModel({
      curtidas: 0,
      artista: artist,
      titulo: title,
      anoDeLancamento: louncherYear,
      clipe,
      compositor: composer,
      categoria: category,
      imagens: images
    })
    const savedMusic = await newMusic.save()
    res.status(201).json(savedMusic)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findAllMusic = async (req, res) => {
  const {
    artist,
    title
  } = req.query

  let query = {}

  if (artist) query.artista = new RegExp(artist, 'i')

  if (title) query.titulo = title

  try {
    const allMusic = await MusicModel.find(query)
    res.status(201).json(allMusic)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findById = async (req, res) => {
  try {
    const findMusic = await MusicModel.findById(req.params.id)
    res.status(201).json(findMusic)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findByArtistName = async (req, res) => {
  try {
    const findArtist = await MusicModel.findOne({
      artista: req.query.artista
    })
    res.status(201).json(findArtist)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findOneByLounchYear = async (req, res) => {
  try {
    const findOneByLounchYear = await MusicModel.findOne({
      anoDeLancamento: req.query.lounchYear
    })
    res.status(201).json(findOneByLounchYear)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const findByCategory = async (req, res) => {
  try {
    const findMusicGenere = await MusicModel.findOne({
      categoria: req.params.name
    })
    res.status(201).json(findMusicGenere)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  createMusic,
  findAllMusic,
  findById,
  findByArtistName,
  findOneByLounchYear,
  findByCategory
}
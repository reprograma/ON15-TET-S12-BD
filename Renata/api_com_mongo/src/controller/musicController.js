
const MusicModel = require('../models/musicModel')

const createMusic = async (req, res) => {
  const {
    artist, title, louncherYear, clipe, composer , category, images} = req.body

    if (!artist) {
      return res
      .status(400)
      .json({message: "O artista não pode estar vazio"})
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
    res.status(500).json({ message: error.message})
  }
}

const findAllMusic = async(req, res) =>{
  try{
    const allMusic = await MusicModel.find({
      // clipe: true,
      // artista: "Roberto Carlos"
    })
    res.status(201).json(allMusic)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

const findById = async(req, res) => {
  try{
    const findMusic = await MusicModel.findById(req.params.id)
    res.status(201).json(findMusic)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
  }

  const findByArtistName = async(req, res) => {
    try{
      const findArtist = await MusicModel.findOne({artista: req.query.artista})
      res.status(201).json(findArtist)
    } catch (error) {
      res.status(500).json({ message: error.message})
    }
    }
module.exports = {
  createMusic,
  findAllMusic,
  findById,
  findByArtistName
}

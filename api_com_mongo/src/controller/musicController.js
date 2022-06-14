const { response } = require("../app")
const MusicModel = require("../models/musicModels")

const createMusic = async (req, res) => {
    const { artist, title, launchYear, clipe, composer, category, images } = req.query

    if(!artist) {
        return response.status(400).json({message: "O artista não pode estar vazio"})
    }
    try {
        const newMusic = new MusicModel({
            curtidas: 0,
            artista: artist,
            titulo: title,
            anoDeLancamento: launchYear,
            clipe: clipe,
            compositor: composer,
            categoria: category,
            imagens: images
        })
        const savedMusic = await newMusic.save()
        res.status(500).json(savedMusic)

    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
}

const findAllMusic = async(req, res) => {
    try {
        const allMusics = await MusicModel.find()
        res.status(200).json(allMusics)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findById = async (req, res) => {
    try {
        const findMusic = await MusicModel.findById(req.params.id)
        res.status(200).json(findMusic)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    createMusic,
    findAllMusic,
    findById
}
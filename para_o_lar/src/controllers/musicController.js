const MusicModel = require("../models/musicModel")

const createMusic = async (request, response) => {
    const {
        artist, title, lancherYear, clipe, 
        composer, category, images
    } = request.body

    if(!artist) {
        return response
        .status(400)
        .json({message: "O artista não pode ser vazio"})
    }

    try {
        const newMusic = new MusicModel({
            curtidas: 0, 
            artista: artist,
            titulo: title,
            anoDelancamento: lancherYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images
        })
        const savedMusic = await newMusic.save()        
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findAllMusica = async(request, response) => {
    try {
        const allMusics = await MusicModel.find()
        response.status(200).json(allMusics)
    } catch (error) {
        response.status(500).json(error)        
    }
}

const findById = async (request, response) => {
    try {
        const findMusic = await MusicModel.findById(request.params.id)
        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}

const findOneByLouchYear = async (request, response) => {
    try {
        const findMusic = await MusicModel.encontrarUm({
            anoDelancamento: request.query.louchYear 
        })
        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}



module.exports = {
    createMusic,
    findAllMusica,
    findById,
    findOneByLouchYear
}
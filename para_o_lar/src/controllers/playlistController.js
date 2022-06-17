const PlaylistModel = require('../models/playlistModel')

const createMusic = async (request, response) => {
    const {
        title, artist, album, launchYear, genre, clipe,
        images
    } = request.body

    if (!title) {
        return response
            .status(400)
            .json({ message: "O título não pode ser vazio" })
    }

    try {
        const newMusic = new PlaylistModel({            
            titulo: title,
            artista: artist,
            Album: album,
            anoDeLancamento: launchYear,            
            genero: genre,
            clipe,
            imagens: images
        })
        const savedMusic = await newMusic.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAll = async(request, response) => {
    
    try {
        const allMusics = await PlaylistModel.find()
            response.status(200).json(allMusics)

    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}

const findById = async (request, response) =>  {
    try {
        const findMusic = await PlaylistModel.findById(request.params.id)
        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


module.exports = {
    createMusic, findAll, findById
}
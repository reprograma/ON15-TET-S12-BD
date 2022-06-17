const artistaModel = require('../models/artistaModel')

//cadastra um novo artista

const createArtist = async (request, response) => {
    const {

        name, genre, albums, birthDate, isActive

    } = request.body

    if (!name) {
        return response
            .status(400)
            .json({ message: "O nome não pode ser vazio" })
    }


    try {
        const newArtist = new artistaModel({

            name: name,
            genre: genre,
            albums: albums,
            birthDate: birthDate,
            isActive: isActive
        })

        const savedArtist = await newArtist.save()

        if (savedArtist == undefined) {
            throw new Error ("Artista não cadastrado")
        }
        response.status(201).json(savedArtist)
    } catch (error) {
        response.status(500).json ({ message: error.message})
    }
}

// retorna todos os artistas

const findAll = async (request, response) => {

    try {
        const allArtists = await artistaModel.find()
            response.status(200).json(allArtists)
        
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}

// retorna por id

    const findById = async (request, response) => {
    try {
        const findArtist = await artistaModel.findById(request.params.id)
        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}

// retorna por nome

const findByName = async (request, response) => {
    try {

        const findArtist = await artistaModel.findOne({
            artist:  request.query.artist
        })

        response.status(200).json(findArtist)
        
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


module.exports = {
    createArtist,findAll,findById,findByName
}
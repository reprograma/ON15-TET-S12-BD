//importar o json/banco de dados
const ArtistModel = require("../models/artistModel")

//Encontrar todos artistas [GET]
const findAllArtists = async(request, response) => {
    // retornar todos 
    let query = {}
    
    try {
        const allArtists = await ArtistModel.find(query)
        response.status(200).json(allArtists)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

//Encontrar artistas pelo ID [GET]
const findById = async (request, response) =>  {
    try {
        const findArtist = await ArtistModel.findById(request.params.id)
        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

//Criar artista [POST]
const createArtist = async (request, response) => {
    const {
        name, artisticName, role,
        birth, yearsActive, nationality, 
        musicGenre, awards, albums, carrerActive
    } = request.body

    if (!artisticName) {
        return response
            .status(400)
            .json({ message: "O artista não pode ser vazio" })
    }

    try {
        const newArtist = new ArtistModel ({
            name,
            artisticName,
            role,
            birth,
            yearsActive,
            nationality,
            musicGenre,
            awards,
            albums,
            carrerActive
        })
        const savedArtist = await newArtist.save()
        response.status(201).json(savedArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    findAllArtists, 
    createArtist,
    findById
}
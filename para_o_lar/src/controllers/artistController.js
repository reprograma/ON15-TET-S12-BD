const ArtistModel = require("../models/artistModel")

const createArtist = async (request, response) => {
    const { artisticName, name, members, bithDate, age, from, albums, awards, alive, image } = request.body
    
    if (!artisticName){
        response.status(400).json({ message: "O nome do artista não pode estar vazio" })
    }

    try {
        const newArtist = new ArtistModel ({
            artisticName, name, members, bithDate, age, from, albums, awards, alive, image
        })

        const savedArtist = await newArtist.save()

        if (savedArtist == undefined) {
            throw new Error ("Artista não pode ser cadastrado.")
        }

        response.status(201).json(savedArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }

}

const findAllArtist = async (request, response) => {
    try {
        const artist = await ArtistModel.find()
        response.status(200).json(artist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findById = async (request, response) => {
    try {
        const findArtist = await ArtistModel.findById(request.params.id)

        if (!findArtist){
            throw new Error ("Id não encontrado.")
        }

        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findByName = async (request, response) => {
    try {
        const findArtist = await ArtistModel.findOne({
            artisticName: request.query.artisticName
        })

        response.status(200).json(findArtist)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createArtist,
    findAllArtist,
    findById,
    findByName
}
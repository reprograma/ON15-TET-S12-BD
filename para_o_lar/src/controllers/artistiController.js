const ArtistiModel = require("../models/artitiModel")

const createArtisti = async (request, response) => {
    const {
        artistaNome, nome, albuns, imagem
    } = request.body

    if(!artistaNome) {
        return response
        .status(400)
        .json({message: "O nome do artista não pode ser vazio"})
    }

    try {
        const newArtisti = new ArtistiModel({
            artistaNome, nome, albuns, imagem
        })
        const savedArtisti = await newArtisti.save()        
        response.status(201).json(savedArtisti)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findAllArtisti = async(request, response) => {
    try {
        const AllArtisti = await ArtistiModel.find()
        response.status(200).json(AllArtisti)
    } catch (error) {
        response.status(500).json(error)        
    }
}

const findById = async (request, response) => {
    try {
        const findArtisti = await ArtistiModel.findById(request.params.id)
        response.status(200).json(findArtisti)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}




module.exports = {
    createArtisti,
    findAllArtisti,
    findById
}
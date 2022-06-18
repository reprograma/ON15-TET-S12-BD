const ArtistModel = require("../models/artistmodels")

const createArtist = async (req, res) => {
    const {
        artist, members, albumsNumber, genre, allAlbums, releaseYear
    } = req.body

    if (!artist) {
        return response
            .status(400)
            .json({ message: "O artista não pode está vazio" })
    }


    try {
        const newArtist = new ArtistModel({
            artist: artist,
            members: members,
            albumsNumber: albumsNumber,
            genre: genre,
            allAlbums: allAlbums,
            releaseYear: releaseYear

        })
        const savedArtist = await newArtist.save()

        if (savedArtist == undefined) {
            throw new Error ("Artista não esta cadastrado")
        }
        res.status(201).json(savedArtist)
    } catch (error) {
        res.statis(500).json ({ message: error.message})
    }
}

const findAllArtist = async (req, res) => {
    try {
        const artist = await ArtistModel.find()
            res.status(200).json(artist)
        
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const findById = async (req, res) => {
    try {
        const findArtist = await ArtistModel.findById(req.params.id)

        if (!findArtist) {
            throw new Error ("ID não encontrado.")
        }

        res.status(200).json(findArtist)
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

const findByName = async (req, res) => {
    try {

        const findArtist = await ArtistModel.findOne({
            artist:  request.query.artist
        })

        reponse.status(200).json(findArtist)
        
    } catch (error) {
        reponse.status(500).json({ message: error.message })
    }
}



module.exports = {
    createArtist,
    findAllArtist,
    findById,
    findByName
}
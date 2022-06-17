const musicModel = require('../models/musicModel')

const findAllMusic = async (request, response) => {
    try {
        const allMusic = await musicModel.find()
        response.status(200).send(allMusic)
    } catch (error) {
        response.status(500).send(error)
    }
}

const createNewMusic = async (request, response) => {
    const {
        artista, titulo,clipe,
        compositor, categoria, imagens
    } = request.body
    try {
        if (!artista || !titulo) {
            return response
                .status(400)
                .json({ message: "O artista e titulo não pode ser vazio" })
        }
        const music = new musicModel({
            artista: artista,
            titulo: titulo,
            clipe,
            compositor: compositor,
            categoria: categoria,
            imagens
        })
        const savedMusic = await music.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).send(error)
    }
}







module.exports = {
    findAllMusic,
    createNewMusic
}
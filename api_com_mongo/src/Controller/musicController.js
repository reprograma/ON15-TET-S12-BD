const { response } = require("../app")
const MusicModel = require("../Models/musicModel")

const createMusic = async (request, response) => {
    const {
        artist, title, lounchYear, clipe,
        composer, category, images
    } = request.body

    try {
        const newMusic = new MusicModel({
            curtidas: 0,
            artista: artist,
            titulo: title,
            anoDeLancamento: lounchYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images
        })
        const savedMusic = await newMusic.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}

module.exports{
    createMusic  
}
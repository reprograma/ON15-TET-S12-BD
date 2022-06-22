const MusicModel = require('../models/musicModel')

const criarCadastroDeMusica = async (request, response) => {
    const {
        artist, title, lounchYear, clipe,
        composer, category, images,letter
    } = request.body

    if (!artist) {
        return response.status(400).json({ message: "O campo do artista não pode ser vazio" })
    }

    if (!title) {
        return response.status(400).json({ message: "O campo do título não pode ser vazio" })
    }

    if (!lounchYear) {
        return response.status(400).json({ message: "O campo da data de lançamento não pode ser vazio" })
    }

    if  (composer == 0) {
        return response.status(400).json({ message: "O campo do compositor da música não pode ser vazio" })
    }

    if  (category == 0) {
        return response.status(400).json({ message: "O campo da categoria da música não pode ser vazio" })
    }

    if  (images == 0) {
        return response.status(400).json({ message: "O campo da imagem não pode ser vazio" })
    }

    if (!letter) {
        return response.status(400).json({ message: "O campo da letra da música não pode ser vazio" })
    }



    try {
        const newMusic = new MusicModel({
            curtidas: 0,
            artista: artist,
            titulo: title,
            anoDeLancamento: lounchYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images,
            letra: letter
        })
        const savedMusic = await newMusic.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const todasMusicas = async(request, response) => {

    const { artist, title } = request.query

    let query = {}

    if (artist) query.artista = new RegExp(artist, 'i')

    if (title) query.titulo = new RegExp(title, 'i')

    try {
        const allMusics = await MusicModel.find(query)
        response.status(200).json(allMusics)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const buscarPorId= async (request, response) =>  {
    try {
        const findMusic = await MusicModel.findById(request.params.id)

        response.status(200).json(findMusic)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}


module.exports = {
    criarCadastroDeMusica, todasMusicas, buscarPorId
    } 
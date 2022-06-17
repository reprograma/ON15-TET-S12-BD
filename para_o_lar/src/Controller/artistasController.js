
const artistasModel = require('../Model/artistasModel')

const createArtistas = async (request, response) => {
const artista = request.body.artista
 const dadosPessoais = request.body.dadosPessoais
 const novelas = request.body.novelas
 const anoDeLancamento = request.body.anoDeLancamento
 const emissora = request.body.emissora
 const produtores = request.body.produtores
 const seguidores = request.body.seguidores

    if (!artista) {
        return response
            .status(400)
            .json({ message: "O artista não pode ser vazio" })
    }

    try {
        const newArtistas = new artistasModel({
            artista: artista,
            novelas: novelas,
            anoDeLancamento:anoDeLancamento,
            emissora: emissora,
            produtores: produtores,
            seguidores: seguidores,
            dadosPessoais: dadosPessoais
        })
        const savedArtistas = await newArtistas.save()
        response.status(201).json(savedArtistas)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findAllArtistas= async(request, response) => {
    try {
        const findAllArtistas = await artistasModel.find()
        response.status(200).json(findAllArtistas)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

const findById = async (request, response) =>  {
    try {
        const findArtistas = await artistasModel.findById(request.params.id)
        response.status(200).json(findArtistas)
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

module.exports = {
    createArtistas, findAllArtistas, findById
}
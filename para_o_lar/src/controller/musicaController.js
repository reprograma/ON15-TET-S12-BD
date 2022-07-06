const { query } = require('express')
const { response } = require('../app')
const MusicaModel = require('../models/musicaModels')

    const criarMusica = async(request, response) => {
        const {
            artist, composer, title, category
        } = request.body

        if (!artist) {
            return response.status(400).json({
                mensagem: 'O artista não pode ser vazio'
            })
        }

        try {
            const novaMusica = new MusicaModel({
                artista: artist,
                compositor: composer,
                titulo: title,
                categoria: category,
            
                
            })

            const salvarMusica = await novaMusica.save()
            response.status(201).json(salvarMusica)

        } catch(error) {
            response.status(500).json({
            mensagem: error.mensagem
            })
        }
    } 

    const buscarTodasAsMusicas = async(request, response) => {
        const {artist, title} = request.query
        let query = {}
        if(artist)query.artista = new RegExp(artist,'1')
        
        if(title)query.titulo = new RegExp(title,'1')
        
        try{
            const allMusic = await MusicaModel.find(query)
            response.status(200).json(allMusic)
        } catch (error){
            response.status(500).json({
                message: error.message
            })
        }
    }

    const findById = async(request, response) => {
        try {
            const buscarArtista = await MusicaModel.findById(request.params.id)
            response.status(200).json(buscarArtista)
        } catch(error){
            response.status(500).json({
                message: error.message
            })
        }
    }

    module.exports = {
        criarMusica,
        buscarTodasAsMusicas,
        findById
    }
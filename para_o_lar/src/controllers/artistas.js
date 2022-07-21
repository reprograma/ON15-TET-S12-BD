const ArtistaSchema = require('../models/artistas')

const listar = async (request, response) => {
    try {
      const artista = await ArtistaSchema.find();
      res.status(200).json(artista);
    } catch (error) {
      res.status(500).json({
        messagem: error.message
      });
    }
  }
  
  const getPorId = async (request, response) => {
    try {
      const artistaEncontrado = await ArtistaSchema.findById(req.params.id);
      if(artistaEncontrado) {
        res.status(200).json(artistaEncontrado);
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message
      })
    }
  }
  
  const CreatArtista = async (request, response) => {
    try {
      const artista = new ArtistaSchema({
        nome: req.body.nome,
        idade: req.body.idade,
        musicas: req.body.musicas,
      })
    
      const salvarArtista = await artista.save();
      res.status(201).json({
        artista: salvarArtista
      })
    } catch (error) {
      res.status(500).json({
        mensagem: error.message 
      })
    }
  }
  
  
  
  module.exports = {
    listar,
    getPorId,
    CreatArtista
  }
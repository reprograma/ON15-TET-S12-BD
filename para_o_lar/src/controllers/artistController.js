const ArtistaModel = require('../models/artistModel')

const createArtist = async (request, response) => {
    const {
        artist, title, releaseYear, clipe,
        composer, category, images, recordCompany,
        language, genre, album

    } = request.body
   
    if (!artist) {
    return response
    .status(400)
    .json({ message: "O artista não pode ser vazio"})
    }

   

    try {
        const newArtist = new ArtistaModel({
            curtidas: 0,
            nome: artist,
            titulo: title,
            anoDeLancamento: releaseYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images,
            gravadora: recordCompany,
            idioma: language,
            genero: genre,  
            album: album

        })

        const savedArtist = await newArtist.save()
        response.status(201).json(savedArtist)
    } catch (error) {
        response.status(500).json({ message: error.message})
    }
}


const findAllArtist = async (request, response) => {
    try {
 
     const allArtist = await ArtistaModel.find()
        
     response.status(200).json(allArtist)
 
    } catch (error) {
      response.status(500).json({ message: error.message})
    }
 }


 const findById = async (request, response) => {
    try {

        const findArtist = await ArtistaModel.findById(request.params.id)
        response.status(200).json(findArtist)

    } catch (error) {
        response.status(500).json({ message: error.message })        
    }
}


const findArtistByName = async(request, response) => {
    // retornar todos 
    // e/ou retorna por artista
    // e/ou retornar por titulo
    const { artist, title } = request.query

    let query = {}

    // music.aritsta.toLowerCase().includes(artist.toLowercase()) -> ignore case
    if (artist) query.artista = new RegExp(artist, 'i')

    if (title) query.titulo = new RegExp(title, 'i')

    try {
        const allArtistss = await ArtistaModel.find()
        const allArtistsss = await ArtistaModel.find(query)
        response.status(200).json(allArtistss)
    } catch (error) {
        response.status(500).json({ message: error.message }) 
    }
}


module.exports = {
    createArtist,
    findAllArtist,
    findById,
    findArtistByName
}

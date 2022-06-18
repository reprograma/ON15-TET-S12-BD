const MusicModel = require("../models/musicModel")


const createMusic = async (request, response)=> {
    const{
        artist, title, releaseYear, clipe, curtidas, composer, category, images
    } = request.body

    if(!artist || !title){
        response.status(400).json({message: "O artista não pode ser vazio"})
    }

    try {

    

        const newMusic = new MusicModel ({
            curtidas: 0,
            artista: artist,
            titulo: title,
            anoDelancamento: releaseYear,
            clipe,
            compositor: composer,
            categoria: category,
            imagens: images

        })

        const savedMusic = await newMusic.save()

        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findAllMusic = async (request, response) => {
    const{ artist, title} = request.query
    let query =  {}
    if(artist) query.artista = new RegExp(artist, "i") 

    if(title) query.titulo = title
try {
    const allMusics = await MusicModel.find(query)

    response.status(200).json(allMusics)
} catch (error) {
    response.status(500).json({message: error.message})
}
}

const findById = async (request, response) => {
    try {

        const findMusic= await MusicModel.findById(request.params.id)
        
        response.status(200).json(findMusic)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findByArtist = async (request, response) => {
    try {

        const findArtist = await MusicModel.findOne({ artista: request.query.artista})
        
        response.status(200).json(findArtist)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findByOneCategory = async (request, response) => {
    try {

        const findMusic = await MusicModel.findOne({ categoria: request.params.name})
        
        response.status(200).json(findMusic)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

module.exports = {
    createMusic,
    findAllMusic,
    findById,
    findByArtist,
    findByOneCategory
}
    

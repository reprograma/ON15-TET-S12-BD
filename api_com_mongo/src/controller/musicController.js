const { response } = require('../app')
const MusicModel = require ('../models/musicModel')
// const createMusic = async ( request, response) => {
//     try {
//         const newMusic = new MusicModel(request.body)

//         const savedMusic = await newMusic.save()

//         response.status(201).json(savedMusic)
//     } catch (error) {
//         response.status(500).json({ message: error.message})
//     }
// }
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

const findAllMusic = async (request, response) => {
    try {
 
     const allMusic = await MusicModel.find(req.query)
 
     res.status(200).json(allMusic)
 
    } catch (error) {
      response.status(500).json({ message: error.message})
    }
 }
 

 const findById = async (req, res) => {
    try {

        const findMusic = await MusicModel.findById(req.params.id)
        response.status(200).json(findMusic)

    } catch (error) {
        response.status(500).json({ message: error.message })        
    }
}
module.exports = {
    createMusic, findAllMusic, findById
}
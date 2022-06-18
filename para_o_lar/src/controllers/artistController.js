
const ArtistModel = require ("../models/artistModel")

//CREATE DO ARTISTA

const creatArtist = async (require,response) => {
    artist, genre, albums, releaseYear, clipe, age
} = require.body

if (!artist) {

    return response.status(400).json ({ message: "O artusta não podeser vazio!"})
} 

//tratamento do erro ~ lembrar

// CADASTRANDO NOVO ARTISTA 


try {
    const newArtist = newArtistModel ({
        artist: artist,
        genre: genre,
        albums: albums,
        realeaseYear: realeaseYear
    })
    const savedArtist = await newArtist.save() //cadastrando novo artista

    res.status(201).json(savedArtist)

} catch (error) 
{
    res.status(500).json ({message:erro.message})
}

//BUSCANDO POR TODOS OS ARTISTAS.
const findAllArtists = async (request, response)

try{

const artist = await ArtistModel.find()

response.status(200).json (artist)

} catch (error){

    response.status(500).json ({message: error.message})
}

// BUSCANDO PELO NOME

const findByName = async (require,response) => {
    try{

        constfindArtist = await ArtistModel.findOne({
            artist: request.query.artist 

        })

        response.status(200).json(findArtist)

    } catch (error)

reponse.status(500).json ({message: error.message})
    
}

module.exports = {
    createArtist,
    findAllArtists,
    findbyName
}
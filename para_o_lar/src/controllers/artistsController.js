const ArtistModel = require("../models/artistsModels")


const createArtist = async (request, response)=> {
    const{
        birthName, artisticName, age, birthday, from, occupation, bio, famousWorks, awards, alive, image
    } = request.body

    if(!birthName){
        response.status(400).json({message: "O nome de nascimento precisa ser preenchido."})
    }

    try {

        const newArtist = new ArtistModel ({
            birthName, artisticName, age, birthday, from, occupation, bio, famousWorks, awards, alive, image
        })

        const savedArtist = await newArtist.save()

        response.status(201).json(savedArtist)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}

const findAllArtists = async (request, response) => {
    const {birthName, artisticName} = request.query
    let query =  {}

    

try {
    if(birthName) {
        query.birthName = new RegExp(birthName, "i")
        const allArtists = await ArtistModel.find(query)

        if (allArtists.length === 0) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }

     }
    }


    if(artisticName) {
        query.artisticName = new RegExp(artisticName, "i") 
        const allArtists = await ArtistModel.find(query)

        if (allArtists.length === 0) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }

     }
    }

    
    const allArtists = await ArtistModel.find(query)

    response.status(200).json(allArtists)
} catch (error) {
    console.error(error)
        console.log("Busca recebida: ", request.query)
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }
    }
}

const findByOccupation = async (request, response) => {
    const {occupation} = request.query
    let query =  {}
    try {
        
        if(occupation) {
        query.occupation = new RegExp(occupation, "i") 
     }
     const findArtist = await ArtistModel.find(query)
     
     if (findArtist.length === 0) {
        throw {
            statusCode: 404,
            message: "Não encontramos resultados com essa busca.",
            details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
            query: request.query
        }}
        
        response.status(200).json(findArtist)

    } catch (error) {
        console.error(error)
        console.log("Busca recebida: ", request.query)
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }
    }
    }



module.exports = {
    createArtist,
    findAllArtists,
    findByOccupation

}
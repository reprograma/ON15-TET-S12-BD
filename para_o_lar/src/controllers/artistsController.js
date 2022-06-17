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

    if(birthName) query.birthName = new RegExp(birthName, "i") 
    if(artisticName) query.artisticName = new RegExp(artisticName, "i") 

try {

    
    const allArtists = await ArtistModel.find(query)

    response.status(200).json(allArtists)
} catch (error) {
    response.status(500).json({message: error.message})
}
}

const findByOccupation = async (request, response) => {
    const {occupation} = request.query
    let query =  {}
    if(occupation) query.occupation = new RegExp(occupation, "i")
    try {
        
        const findArtist = await ArtistModel.find(query)
        
        if(findArtist.length == 0) throw new Error ("Não foi possível encontrar artistas com essa ocupação.")
        
        response.status(200).json(findArtist)

    } catch (error) {
        response.status(500).json({message: error.message})
    }
}


module.exports = {
    createArtist,
    findAllArtists,
    findByOccupation

}
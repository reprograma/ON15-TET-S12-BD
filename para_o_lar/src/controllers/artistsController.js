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

module.exports = {
    createArtist 

}
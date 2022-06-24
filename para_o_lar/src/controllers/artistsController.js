const ArtistModel = require("../models/artistsModels")

const createArtist = async (request, response)=> {
    const { birthName, artisticName, age, birthday, from, occupation, bio, famousWorks, awards, alive, image } = request.body

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

const findAll = async (req, res) => {   
   try {
    const allArtitsts = await ArtistModel.find()
    
    res.status(200).json(allArtitsts)

    } catch (error) {
    console.error(error)
    console.log("Busca recebida: ", req.query)
    if (error.statusCode) {
        res.status(error.statusCode).json(error)
    } else {
        res.status(500).json({ message: error.message })
    }
    }
}

const findById = async (req, res) => {

    try {        
        const id = req.params.id;
        await ArtistModel
        .findById(id)       
        .exec((err, artists) => {
          if (err) {
            return res.status(400).send({ message: `${err.message} - Id informado está fora do padrão.` });
          } else if (artists == null) {
            return res.status(404).send('Id do artista não encontrado na base de dados');
          } else {
            return res.status(200).send(artists);
          }
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const findByName = async (req, res) => {

    try {
    const name = req.query.name    
    
    const artistFound = await ArtistModel.find({ $or: [
        { birthName: { $regex : name, $options: 'i'} }, 
        { artisticName: { $regex : name, $options: 'i'}}
    ]})
    
    res.status(200).json(artistFound)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
        
    }

}
/* const findByName = async (req, res) => {
    const { name } = req.query   
    
    try {
        const findArtist = await ArtistModel.find()

        for(let value of Object.values(findArtist)) {
            // console.log(findArtist)
            if(findArtist[value].toLowerCase().includes(name[value].toLowerCase())) {
                res.status(200).json(findArtist)
            } else if(!findArtist[value]) {
                res.status(404).send("Artista não localizado")
            }
        }

}catch (error) {
    res.status(500).json({message: error.message})
} 

}*/

const findByOccupation = async (request, response) => {
    const { occupation } = request.query
    let query = {}
    try {

        if (occupation) {
            query.occupation = new RegExp(occupation, "i")
        }
        const findArtist = await ArtistModel.find(query)

        if (findArtist.length === 0) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }
        }

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

const updateArtistItems = async (request, response) => {

    try {
        const findArtist = await ArtistModel.findById(request.params.id)

        if (findArtist == undefined) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }
        }

        const updateArtist = await ArtistModel.findOneAndUpdate(findArtist, request.body)


        response.status(200).json({
            "artista atualizado": updateArtist
        })


    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }
    }
}

const updateAllArtistItems = async (request, response) => {
    const {
        birthName, artisticName, age, birthday, from, occupation, bio, famousWorks, awards, alive, image
    } = request.body
    try {
        const findArtist = await ArtistModel.findById(request.params.id)

        if (findArtist == undefined) {
            throw {
                statusCode: 404,
                message: "Não encontramos resultados com essa busca.",
                details: "Em nosso banco de dados, não existem informações compatíveis com essa busca.",
                query: request.query
            }
        }

        const updateAll = { birthName, artisticName, age, birthday, from, occupation, bio, famousWorks, awards, alive, image }

        const keys = Object.keys(updateAll)

        keys.forEach(key => {
            if (!updateAll[key]) {
                throw {
                    statusCode: 406,
                    message: `Não foi possível atualizar artista: ${request.params.id}. Todos os itens devem ser preenchidos.`,
                    details: `Para atualizar artista, é preciso preencher todos os dados.`
                };
            };

        });

        const updateArtist = await ArtistModel.findOneAndReplace(request.params.id, request.body)


        response.status(200).json({
            "artista atualizado": updateArtist
        })


    } catch (error) {
        if (error.statusCode) {
            response.status(error.statusCode).json(error)
        } else {
            response.status(500).json({ message: error.message })
        }
    }
}

const deleteArtist = async(req, res) => {
    
    try {
        const idRequest = req.params.id
        const findArtist = await ArtistModel.findByIdAndDelete({_id : idRequest})
        
        if(!findArtist) throw new Error ("Id não incluso no sistema") 
               
        res.status(200).json([{
            "mensagem": "Artista deletado com sucesso",
            "item-deletado" : findArtist
        }])
        
    } catch (error) {
        res.status(404).json({message: error.message})
    }

}

module.exports = {
    createArtist,
    findAll,
    findById,
    findByName,
    findByOccupation,
    updateArtistItems,
    updateAllArtistItems,
    deleteArtist

}
const musicModel = require('../models/musicModel')

const findAllMusic = async (request, response) => {
    try {
        const allMusic = await musicModel.find()
        response.status(200).send(allMusic)
    } catch (error) {
        response.status(500).send(error)
    }
}

const createNewMusic = async (request, response) => {
    const {
        artista,
        titulo,
        clipe,
        compositor,
        categoria,
        imagens
    } = request.body
    try {
        if (!artista || !titulo) {
            return response
                .status(400)
                .json({
                    message: "O artista e titulo não pode ser vazio"
                })
        }
        const music = new musicModel({
            artista: artista,
            titulo: titulo,
            clipe,
            compositor: compositor,
            categoria: categoria,
            imagens
        })
        const savedMusic = await music.save()
        response.status(201).json(savedMusic)
    } catch (error) {
        response.status(500).send(error)
    }
}

const findMusicByQuery = async (request, response) => {
    const {
        categoria,
        artista
    } = request.query
    const query = {}
    try {
        if (!categoria && !artista) {
            return response
                .status(400)
                .json({
                    message: "Não foi informado a categoria nem o artista que deseja pesquisar"
                })
        }
        if (categoria != undefined) {
            query.categoria = new RegExp(categoria, "i")
        }
        if (artista != undefined) {
            query.artista = new RegExp(artista, "i")
        }


        const findMusic = await musicModel.find(query)
        if (findMusic.length == 0) {
            return response
                .status(404)
                .json({
                    message: "Não foi encontrado nenhuma musica com essa categoria ou artista"
                })
        }
        response.status(200).send(findMusic)

    } catch (error) {
        response.status(500).send(error)
    }
}


const findMusic = async (request, response) => {
    const { titulo } = request.query
    const query ={}
    try {
        if (!titulo) {
            return response
                .status(404)
                .json({
                    message: "Não foi informado o titulo da musica que deseja pesquisar"
                })
        }
        query.titulo = new RegExp(titulo, "i")

        const findMusic = await musicModel.findOne(query)

        if (findMusic.length == 0) {
            return response
                .status(404)
                .json({
                    message: "Não foi encontrado nenhuma musica com esse titulo"
                })
        }
        response.status(200).send(findMusic)

    } catch (error) {

        response.status(500).send(error)
    }
}

const deleteMusicById = async(request,response)=>{
    const id = request.params.id
    const query = {}
    try {
        if(id == undefined){
            return response
                .status(404)
                .json({
                    message: "Não informado o ID da musica que deseja excluir"
                })
        }
        query._id = id
        const deleteMusic = await musicModel.findByIdAndRemove(query)
        response.status(200).json({"musica excluida":deleteMusic})

    } catch (error) {
        response.status(500).send(error)
    }
}









module.exports = {
    findAllMusic,
    createNewMusic,
    findMusicByQuery,
    findMusic,
    deleteMusicById

}
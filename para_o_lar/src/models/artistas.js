const mongoose = require('mongoose')

const artistaModel = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    idade: Number,
    musicas: Array
})


module.exports = mongoose.model("artista", artistaModel)
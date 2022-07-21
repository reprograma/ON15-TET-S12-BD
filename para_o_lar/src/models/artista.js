const mongoose = require('mongoose')

const artistaSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    nome: String,
    idade: Number,
    musicas: Array
})


module.exports = mongoose.model("artista", artistaSchema)
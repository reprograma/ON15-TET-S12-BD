const mongoose = require("mongoose")

const ArtistiSchema = mongoose.Schema({
    _id: { 
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId    
    },
    artistaNome: {
        type: String,
        default: "artista default"
    },
    nome: String,
    albuns: [String],
    imagem: [String]
    
}, {timestamps : true})

const Model = mongoose.model("artista", ArtistiSchema)
module.exports = Model


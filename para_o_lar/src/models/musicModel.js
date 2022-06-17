const mongoose = require("mongoose")

const MusicSchema = mongoose.Schema({
    _id: { 
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId    
    },
    artista: {
        type: String,
        default: "artista default"
    },
    compositor: [String],
    titulo: {
        type: String,
        require: true
},
    categoria: [String],
    anoDeLancamento: Date,
    clipe: Boolean,
    imagem: [String],
    curtidas: Number
}, {timestamps : true})

const Model = mongoose.model("musica", MusicSchema)
module.exports = Model


const mongoose = require('mongoose')

const PlaylistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    titulo: {
        type: String,
        required: true,
        unique: true
    }, 
    artista: {
        type: String,
        required: true
    },
    album: [String],
    anoDeLancamento: Date, 
    genero: [String],
    clipe: Boolean,
    imagens: [String]
}, { timestamps : true });

const Model = mongoose.model("musica", PlaylistSchema)

module.exports = Model
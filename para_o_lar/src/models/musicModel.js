const mongoose = require('mongoose')


const MusicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artista: String,
    compositor: [String],
    titulo:  String,
    categoria: [String],
    clipe: Boolean,
    imagens: [String]
}, { timestamps : true })

const Model = mongoose.model('musica', MusicSchema)



module.exports = Model
const mongoose = require("mongoose")
/**
 * [x] artista
 * [x] compositor | autor
 * [x] titulo | nome,
 * [x] album -> String
 * [x] estilo | categoria | genero -> [String]
 * [x] ano de lancamento -> Date
 * [x] idioma -> String
 * [ ] gravadora
 * [ ] legenda | letra | refrão
 * [x] duracao -> String
 * [x] clipe -> Boolean
 * [ ] plataforma
 * [x] imagens -> [String]
 * [x] Video
 * [ ] discos -> cd -> pendrive -> disponivel
 * [ ] formato
 * [ ] comentarios
 * [ ] visualizacoes
 * [x] curtidas
 */
 const MusicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artista: {
        type: String,
        required: true //verificação adicional
    },
    compositor: [String],
    titulo: {
        type: String,
        required: true,
        unique: true
    },
    categoria: [String],
    anoDeLancamento: Date,
    clipe: Boolean,
    imagens: [String],
    curtidas: Number
}, { timestamps : true })

const Model = mongoose.model("musica", MusicSchema)

module.exports = Model


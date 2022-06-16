const mongoose = require('mongoose')
/** usando spotify como refencia
 * [x]  artista -> String
 * [x]  compositor | autor  [String]
 * [x]  -> titulo | nome, String
 * [x]  album String,
 * [x]  estilo | categoria | -> genero [String]
 * [x]  ano de lancamento Date
 * [x]  idioma
 * [ ]  gravadora
 * [ ]  legendas | letra | refrao
 * [x]  duracao String
 * [x]  clipe -> Boolean
 * [ ]  plataforma
 * [x]  imagens [String]
 * [ ]  video
 * [ ]  discos -> cd -> pendrive -> disponivel
 * [ ]  formato
 * [ ]  comentarios
 * [ ]  visualizacoes
 * [x]  curtidas
 * [ ]  versao
 * timestamps -> createdAt updatedAt
 */

const MusicSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artista: {
        type: String,
        required: true
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
    curtidas: Number,
}, { timestamps : true })

const Model = mongoose.model('musica', MusicSchema)
module.exports = Model

// module.exports = mongoose.model('musica', MusicSchema)

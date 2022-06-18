const mongoose = require('mongoose')

/**usando spotify como referencia
 * [x] nome -> String
 * [x] album -> String
 * [x] estilo | categoria | -> genero [string]
 * [x] ano de lancamento
 * [x] idioma
 * [x] gravadora
 * [x] clipe -> Boolean
 * [x] imagens [String]
 * [x] discos -> cd -> pendrive -> disponivel
 * [x] curtidas
 * timestamps -> createAt updateAt
 */
 const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    nome: {
        type: String,
        required: true
    },

    genero: [String],

    album: {
        type: String,
        required: true,
        unique: true
    },

    categoria: [String],

    idioma: [String],

    gravadora: [String],

    anoDeLancamento: Date,

    clipe: Boolean,

    imagens: [String],

    discos: [String],

    curtidas: Number

}, { timestamps: true })


module.exports = mongoose.model('artista', ArtistSchema);
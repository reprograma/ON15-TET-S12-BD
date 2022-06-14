const mongoose = require("mongoose")
/** usando spotify com referencia
 * [x] artista - string
 * [x]compositor, autor - [string]
 * [x]album, string
 * [x]estilo, string 
 * [x]categoria,
 * [x]ano de lançamento
 * []idioma
 * []gravadora
 * [x]clipe - boolean
 * []plataformas
 * [x]imagens [string]
 * [] video
 * []comentarios
 * []discos -> cd -> pendraive -> disponivel
 * []gravadora
 * [] visualizacoes
 * [x] curtidas
 * [x] versao
 */
const MusicSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    artista: String,
    compositor: [String],
    titulo: String,
    categoria: [String],
    anoDeLancamento: Date,
    clipe: Boolean,
    imagens: [String],
    curtidas: Number
}, { timestamps : true })

const Model = mongoose.model('musica', MusicSchema)
module.exports = Model

const mongoose = require('mongoose')
// usando artista de novela como referencia
// [x] artista -> String
// [x] data de nascimento -> String
// [x] casada(o) -> boolean
// [x] filhos -> number
// [x] rede sociais -. String
// [x] cpf - String
// [x] emissoras -String
// [x] novelas - String
// [x] produtores -String 
// [x] tempo de duraçao -> String
 

const artistasSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artista: {
        type: String,
        required: true
    },
    dadosPessoais: [String],
   
    novelas: [String],
    anoDeLancamento: Date,
    emissora: String,
    produtores: [String],
    seguidores: Number
}, { timestamps : true })

const Model = mongoose.model('artista', artistasSchema)
module.exports = Model
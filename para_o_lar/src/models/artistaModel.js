const mongoose = require("mongoose")

const ArtistaSchema = mongoose.Schema({

    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },

    name: { type: String, 
        required: true },

    genre: [String],

    albums: {
        type: Number,
        required: true
    },
    
    birthDate: Date,
    isActive: Boolean,


}, { timestamps: true })
 
const Model = mongoose.model("artista", ArtistaSchema)

module.exports = Model


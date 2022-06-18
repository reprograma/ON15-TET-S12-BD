const mongoose = require('mongoose')

const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    name: {
        type: String,
    },
    artisticName: {
        type: String,
        required: true,
        unique: true
    },
    role: [String],
    birth: Date,
    yearsActive: Number,
    nationality: String,
    musicGenre: [String],
    awards: [String],
    albums: [String],
    carrerActive: Boolean
}, { timestamps: true })

const Model = mongoose.model("artists", ArtistSchema)

module.exports = Model
const mongoose = require("mongoose")

const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: String,
    members: [String],
    albumsNumber: Number,
    genre: [String],
    allAlbums: Boolean,
    realeaseYear: Date,

}, { timestamps: true })
 
const Model = mongoose.model("artist", ArtistSchema)

module.exports = Model
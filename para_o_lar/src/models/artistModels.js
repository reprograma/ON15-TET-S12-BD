const mongoose = require ("mongoose")

const ArtistSchema = mongoose.Schema ({
    
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artist: {
        type: String,
        required: true
    },
   genre: [String],

   albums: [String],

   releaseYear: Date,

    clipe: Boolean,

    age: Number,
}, { timestamps : true })


const Model = mongoose.model('artist', ArtistSchema)
module.exports = Model

//artist, genre, albums, releaseYear, clipe, age

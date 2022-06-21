const mongoose = require("mongoose")

const ArtistSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
    },
    artisticName: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    members: [String],
    bithDate: Date,
    age: {
        type: Number,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    albums: [String],
    awards: [String],
    alive: {
        type: Boolean,
        required: true
    },
    image: [String]
}, { timestamps: true })

const Model = mongoose.model("artists", ArtistSchema)

module.exports = Model
const mongoose = require("mongoose")

const Model = mongoose.model("artist", MusicSchema)

module.exports = Model
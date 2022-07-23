const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        required: true
    },
    albuns: {
        type: Array,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('artista',userSchema)
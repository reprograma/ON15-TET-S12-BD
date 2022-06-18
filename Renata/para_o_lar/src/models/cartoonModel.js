const mongoose = require('mongoose')

const CartoonSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  seriesName: {
    type: String,
    required: true
  },
  creation: Date,
  animator: [String],
  category: [String],
  age: Number,
  images: Boolean,
  movie: Boolean,
}, {
  timestamps: true
})

const Model = mongoose.model('cartoons', CartoonSchema)
module.exports = Model
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dev = new Schema(
  {
    studioName: { type: String, required: true },
    gameCount: { type: Number, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('devs', Dev)

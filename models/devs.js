const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Dev = new Schema(
  {
    studioName: { type: String, required: true },
    ceoName: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('devs', Dev)

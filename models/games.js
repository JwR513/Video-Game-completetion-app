const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Game = new Schema(
  {
    name: { type: String, required: true },
    genre: { type: String, required: true },
    completion: { type: String, required: true },
    developer: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('games', Game)

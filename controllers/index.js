const Game = require('../models/games')

const createGame = async (req, res) => {
  try {
    const game = await new Game(req.body)
    await game.save()

    return res.status(201).json({
      game
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getGames = async (req, res) => {
  try {
    const games = await Game.find()
    return res.status(200).json({ games })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params
    await Game.findByIdAndUpdate(id, req.body, { new: true }, (err, game) => {
      if (err) {
        res.status(500).send(err)
      }
      if (!game) {
        res.status(500).send('Game not found!')
      }
      return res.status(200).json(game)
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteGame = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Game.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Game deleted')
    }
    throw new Error('Game not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createGame,
  getGames,
  updateStatus,
  deleteGame
}

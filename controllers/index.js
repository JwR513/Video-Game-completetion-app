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

module.exports = {
  createGame
}

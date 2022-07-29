const Game = require('../models/games')
const Dev = require('../models/devs')
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
const createDev = async (req, res) => {
  try {
    const dev = await new Dev(req.body)
    await dev.save()

    return res.status(201).json({
      dev
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
const getDevs = async (req, res) => {
  try {
    const devs = await Dev.find()
    return res.status(200).json({ devs })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateStatus = async (req, res) => {
  try {
    let updatedGame = await Game.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true
      }
    )
    res.send(updatedGame)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//https://stackoverflow.com/questions/57447089/put-method-with-axios-on-front-end-vue-changing-wrong-id this stackoverflow post helped me fix id grabbing issues i was having with my delete and put requests
const deleteGame = async (req, res) => {
  try {
    const deleted = await Game.findOneAndDelete(
      { _id: req.params.id },
      req.body
    )
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
  deleteGame,
  updateStatus,
  getDevs,
  createDev
}

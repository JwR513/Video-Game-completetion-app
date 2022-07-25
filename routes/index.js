const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('this is the root'))

// router.put('/', updateStatus)

// router.get('/', getGames)

router.post('/games', controllers.createGame)

// router.delete('/', deleteGame)

module.exports = router

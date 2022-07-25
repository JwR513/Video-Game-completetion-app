const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('this is the root'))

// router.put('/', updateStatus)

router.get('/games', controllers.getGames)

router.post('/gameForm', controllers.createGame)

// router.delete('/', deleteGame)

module.exports = router

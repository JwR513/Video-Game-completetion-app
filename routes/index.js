const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('this is the root'))

router.delete('/deleteMe', controllers.deleteGame)
// router.put('/statusUpdate', controllers.updateStatus)

router.get('/games', controllers.getGames)

router.post('/games', controllers.createGame)

// router.delete('/', deleteGame)

module.exports = router

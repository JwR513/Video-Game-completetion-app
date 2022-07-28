const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('this is the root'))

router.delete('/deleteMe/:id', controllers.deleteGame)

router.put('/games/:id', controllers.updateStatus)

router.get('/games', controllers.getGames)

router.get('/devs', controllers.getDevs)

router.post('/devs', controllers.createDev)

router.post('/games', controllers.createGame)

module.exports = router

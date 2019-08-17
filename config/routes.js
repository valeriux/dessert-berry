const router = require('express').Router()
const dessertsController = require('../controllers/desserts')


//Donde se direccionan todos mis links.

router.get('/', (req, res) => res.json({ message: 'Welcome to my Desserts API'}))
router.get('/desserts', dessertsController.index)
router.get('/desserts/:id', dessertsController.show)

module.exports = router

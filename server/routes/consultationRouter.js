const Router = require('express')
const router = new Router()
const consultationController = require('../controllers/consultationController')

router.post('/', consultationController.create)
router.get('/', consultationController.getAll)
router.get('/:id', consultationController.getOne)

module.exports = router
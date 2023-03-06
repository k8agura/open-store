const Router = require('express')
const router = new Router()
const consultationController = require('../controllers/consultationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole, consultationController.create)
router.get('/', consultationController.getAll)
router.get('/:id', consultationController.getOne)

module.exports = router
const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const authorRouter = require('./authorRouter')
const consultationRouter = require('./consultationRouter')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/author', authorRouter)
router.use('/consultation', consultationRouter)

module.exports = router
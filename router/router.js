const router = require('express').Router()
const { getIndex, postIndex, postDelete } = require('../controller/userController')


router.get('/',getIndex)
router.post('/',postIndex)
router.post('/delete',postDelete)


module.exports = router 
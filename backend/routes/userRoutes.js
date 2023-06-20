const express = require('express')
const {getAllUser,loginUser} = require('../controller/userController')

const router = express.Router()

router.get('/users', getAllUser)
router.post('/users',loginUser)

module.exports = router
const express = require('express')
const taskControl = require('../controller/taskController')

const router = express.Router();

router.post('/tasks',taskControl)

module.exports = router;
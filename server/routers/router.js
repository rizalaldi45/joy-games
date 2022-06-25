const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')
const Authorize = require('../middleware/authorize')

router.post('/api/register', UserController.register)
router.post('/api/login', UserController.login)
router.post('/api/logout', Authorize, UserController.logout)

module.exports = router
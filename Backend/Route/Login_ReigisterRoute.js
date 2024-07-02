const mongoose = require('mongoose')
const express  = require('express')
const router = express.Router()






const Login_RegisterController = require('../App/Api/Controller/Login_RegisterController')
router.post('/admin/login', Login_RegisterController.LoginAdmin)
router.post('/admin/register', Login_RegisterController.RegisterAdmin)














module.exports = router
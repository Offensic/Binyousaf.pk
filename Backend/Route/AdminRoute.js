const mongoose = require('mongoose')
const express = require('express')


const router = express.Router()




const AdminController = require('../App/Api/Controller/AdminController')
router.get('/product/Category', AdminController.FindALlProduct)
router.delete('/deleteCategory/:ProductID', AdminController.DeleteCategory  )
router.get('/product/:ProductID', AdminController.FindSingleProduct)

// Route For Gettng the all Ordders
router.get('/user/getorder', AdminController.GetALLORDER)
router.delete('/user/deleteorder/:OrderId', AdminController.DELETEORDER )


router.post('/setregisterbutton', AdminController.SETRegisterButtong)
router.get('/get/setregisterbutton', AdminController.GetState)

// path For Get Ip on an OrderPanel
router.get('/get/ipaddress', AdminController.GETIP)


module.exports = router
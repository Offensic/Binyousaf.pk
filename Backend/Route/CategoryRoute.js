const mongoose = require('mongoose');
const express = require('express');


const router = express.Router();





const CategoryController = require('../App/Api/Controller/CategoryController')
router.get('/category/:categoryID', CategoryController.FindCategory)
router.get('/product/:productID', CategoryController.Findproduct)













module.exports = router
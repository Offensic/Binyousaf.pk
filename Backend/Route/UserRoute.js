const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const UserController = require('../App/Api/Controller/UserController');

router.post('/postorder', UserController.POSTORDER);
router.post('/Contactus', UserController.ContactUs)
router.post('/Ipaddress', UserController.CreatedIP)

module.exports = router;

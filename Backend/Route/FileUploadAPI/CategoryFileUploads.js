const mongoose = require('mongoose');
const express = require('express');
const app = express()
const fs  = require('fs')
const multer = require('multer');

const cloudinary = require('cloudinary').v2
const CloudinaryConfig = require('../../utils/cloudinary-config')

const router = require('../CategoryRoute');
const CategoryModel = require('../../App/Api/Model/CategoryModel')



// Storage function 
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Uploads/Category')
    },

    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }

})


// Filter is a Funcion For Defining a  image type
const fileFilter = (req, file, cb) => {

    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'audio/mp3' || file.mimetype === 'video/mp4'
        || file.mimetype === 'audio/ogg' || file.mimetype === 'audio/x-m4a' || file.mimetype === 'application/octet-stream'
        || file.mimetype === 'application/pdf') {

        cb(null, true)
    }

    else {
        cb(null, false)
    }
};

// Upload is function as a Middleware and it take two more Functiokn storage and Filefilter
const upload = multer({

    storage: storage,
    limits: {

        fileSize: 1024 * 1024 * 16 //16MB
    },

    fileFilter: fileFilter

})

router.post('/', upload.single('file'), async (req, res, next) => {

    const Category = new CategoryModel({
        _id: new mongoose.Types.ObjectId(),

        id: req.body.id,
        title: req.body.title,
        category: req.body.category,
        sale: req.body.sale,
        price: req.body.price,
        offprice: req.body.offprice,


    });

    if (req.file) {

        const result = await cloudinary.uploader.upload(req.file.path, {
            use_filename: true,
            unique_filename: false,
            folder: 'binyousaf',
        }, (error, result) => {
            if (error) {
                console.log(error);
                return res.send('Failed to upload to Cloudinary');
            }

        })

        Category.path = result.secure_url;
        Category.name = req.file.filename;

      Category.save().then(results => {
            console.log(results)
            res.send("Product Successfully added")
            
            fs.unlink(req.file.path, (err) => {
                if (err) {
                    console.error('Failed to delete the file:', err);
                } else {
                    console.log('File deleted successfully');
                }
            });
        })
    }


});


module.exports = router








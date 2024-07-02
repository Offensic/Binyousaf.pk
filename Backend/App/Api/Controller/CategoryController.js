const mongoose = require('mongoose')



const CategoryModel = require('../Model/CategoryModel')


module.exports = {

    // API for find the Category  
    FindCategory: function (req, res) {

        const { categoryID } = req.params

        CategoryModel.find({ category: categoryID })
            .then(results => {
                if (results) {
                    res.send(results)
                }
                else {
                    res.send("Category Not Found")
                }
            }
            )
            .catch(error => res.send("Failed to get Category", error))


    },


    // APi for Find the SIngle Product base in which user are Clicked
    Findproduct: function (req, res) {

        const { productID } = req.params


        CategoryModel.findOne({ id: productID }).then(results => {

            if (results) {
                res.send([results])
            }
            else {
                res.send("Product Not Found")
            }

        })
        .catch(error => {res.send("Failed to Find Product")})


    },











}
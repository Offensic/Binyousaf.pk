const mongoose = require('mongoose')


const CategoryModel = require('../Model/CategoryModel')
const UserModel = require('../Model/UserModel')
const CheckStateModel = require('../Model/CheckStateModel')
const UserDetails  = require('../Model/UserDetailModel')

module.exports = {


    // API For FInding a ALl Category Product
    FindALlProduct: function (req, res) {

        CategoryModel.find({}).then((results) => { res.send(results) })
            .catch((error) => res.send(console.log(error)))

    },



    // APi for Findg a single Product it for editing
    FindSingleProduct: function (req, res) {

        const { ProductID } = req.params
        CategoryModel.findOne({ _id: ProductID }).then(result => { res.send(result) })
            .catch(err => { res.send("Failed to Find product", err) })
    },




    // APi for Deleting a Single Product on the base of ID
    DeleteCategory: function (req, res) {

        const { ProductID } = req.params
        CategoryModel.findByIdAndDelete(ProductID).then(success => { res.send("Successfully Category Deleted") })
            .catch(err => { res.send("Failed to Delete Product" + err) })
    },




    GetALLORDER: function (req, res) {
        UserModel.find({}).then(results => { res.send(results) })
            .catch(error => { res.send("Failed to Get Order", error) })

    },


    DELETEORDER: function (req, res) {
        const { OrderId } = req.params
        console.log(OrderId)
        UserModel.findByIdAndDelete(OrderId).then(success => { res.send("Order Successfully Delted") })
            .catch(err => { res.send("Faled to get an Order", err) })
    },




    SETRegisterButtong: function (req, res) {

        const data = req.body.register
        const id = '647ad59482ecb4616325d23b'
        console.log(req.body)
        CheckStateModel.findByIdAndUpdate(id, req.body).then(results => {

            if (data === true) {
                res.send("Successfully Updated true");
            }

            else if (data === false) {
                res.send("Successfully Update false")
            }
            else {
                res.send("Value is not Excaptable")
            }
        })
            .catch(error => {
                res.send("Failed to Updated", error);
            });
    },



    GetState: function (req, res) {
        CheckStateModel.find({}).then(results => { res.send(results) })
            .catch(error => { res.send("Failed to Get State", error) })

    },

    
    GETIP: function (req, res) {
        UserDetails.find({}).then(results => { res.send(results) })
            .catch(error => { res.send("Failed to Get State", error) })

    },







}
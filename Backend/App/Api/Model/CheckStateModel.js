const mongoose = require('mongoose')
mongoose.pluralize(null)


const Schema = mongoose.Schema

const CheckStateModel = new Schema({

    register: {type: String, required: true}



}) 


const AdminDetail = mongoose.model('States', CheckStateModel)
module.exports = AdminDetail
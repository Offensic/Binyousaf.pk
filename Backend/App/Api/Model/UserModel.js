const mongoose = require('mongoose')


const Schema = mongoose.Schema

const OrdeSchema = new Schema({

    Firstname: {type: String, required: true},
    Lastname: {type: String, required: true},
    Companyname: {type: String},
    Contryregion: {type: String, required: true},
    Streetaddress : {type: String, required: true},
    Apartment: {type: String},
    Towncity: {type: String, required: true},
    Statecountry: {type: String, require: true},
    Postalcode: {type: Schema.Types.Mixed, required: String},
    Phonenumber:{type: Number, required: true},
    Emailaddress: {type: String, required: true},
    Notes: {type: String},
    title: [{type: String, required: true}],
    quantity : {type: Schema.Types.Mixed, required: true},
    itemprice: {type: Schema.Types.Mixed, required: true},
    total: {type: Schema.Types.Mixed, required: true},
    subtotal: {type: Schema.Types.Mixed, required: true},
    IsCouponApplied: {type: String,},
    year: {type: Number, required: true},
    month: {type: Number, required: true},
    date: {type: String, required: true},
    status: {type: String, required: true},
    IpAddress: {type: String,}
})



const UserModel = mongoose.model('Orders', OrdeSchema)
module.exports = UserModel
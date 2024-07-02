const mongoose = require('mongoose')
mongoose.pluralize(null)


const Schema = mongoose.Schema

const IPSchema = new Schema({

    UserIpAddress: {type: String, required: true, unique: true}
}) 


const UserDetails = mongoose.model('UserDetails', IPSchema)
module.exports = UserDetails
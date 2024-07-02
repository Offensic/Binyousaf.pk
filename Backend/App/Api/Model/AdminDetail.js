const mongoose = require('mongoose')
mongoose.pluralize(null)


const Schema = mongoose.Schema

const AdminDetailSchema = new Schema({

    email: {type: Schema.Types.Mixed, required: true, unique: true, },
    password: {type: Schema.Types.Mixed, requiredL: true}



}) 


const AdminDetail = mongoose.model('AdminDetail', AdminDetailSchema)
module.exports = AdminDetail
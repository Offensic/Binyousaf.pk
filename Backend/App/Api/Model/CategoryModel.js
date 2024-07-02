const mongoose = require('mongoose');

mongoose.pluralize(null)
const Schema = mongoose.Schema

const CategorySchema = new Schema({

        id: {type: String, required: true, unique: true},
        title: {type: String, required: true, unique: true},
        price: {type: Schema.Types.Mixed, required: true},
        offprice : {type: Schema.Types.Mixed,},
        category: {type: String, required: true,},
        sale: {type: String, required: true, },
        path: {type: String },
        name: {type: String,}

})


const  CategoryModel = mongoose.model('Categoryies', CategorySchema);
module.exports = CategoryModel;





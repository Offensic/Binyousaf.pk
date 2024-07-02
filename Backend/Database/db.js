const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config({ path: '.env' });








mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.srelacu.mongodb.net/Binyousaf?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true})

// mongoose.connect('mongodb://127.0.0.1:27017/Binyousaf', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Conneced to Databse Binyousaf'))
    .catch((error) => console.log("Failed to Connect to Database" , error))


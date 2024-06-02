// config/db.js

const mongoose = require('mongoose');


const connectDB = async () => {
    mongoose.connect('mongodb+srv://Rishabh:Rishabh@cluster0.t6cbwos.mongodb.net/', {
    })  
      .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
};

module.exports = connectDB;

const mongoose = require('mongoose');

function connectDB() {
    return mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
      
    }).then(() => {
        console.log('Connected to database');
    }).catch((err) => {
        console.log('Error connecting to database', err);
    });
}



module.exports = connectDB;
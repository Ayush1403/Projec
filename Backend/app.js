const dotenv = require('dotenv');
const  express = require('express');
dotenv.config();
const app = express();
const connectDB = require('./db/db');
const userRoutes = require('./routes/user.route');
const cookieParser = require('cookie-parser');

connectDB()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    console.log('Hello World');
});

app.use('/user', userRoutes);


module.exports = app;
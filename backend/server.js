const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

//routes
const authRoute = require('./routes/auth');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db')
);

//middlewares
app.use(express.json());
app.use('/api/user', authRoute);




app.listen(5000, () => console.log('api running'));

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

//routes
const authRoute = require('./routes/auth');
const postRoute = require('./privateroutes/posts');
const recipeRoute = require('./privateroutes/postRecipe');

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to db')
);

//middlewares
app.use(express.json());
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/recipe', recipeRoute);




app.listen(5000, () => console.log('api running'));

const express = require('express');
const app = express();

//routes
const authRoute = require('./routes/auth');


//middlewares
app.use('/api/user', authRoute);



app.listen(5000, () => console.log('api running'));

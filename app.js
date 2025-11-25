const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/users');
const ejs = require('ejs');

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Static files
app.use(express.static('public'));

//parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//is a middleware
app.use(mainRoutes);
app.use(userRoutes);


app.listen(port, ()=>{``
    console.log(`Server is running on port ${port}`);
});

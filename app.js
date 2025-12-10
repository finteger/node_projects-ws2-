const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const mainRoutes = require('./routes/mainRoutes');
const userRoutes = require('./routes/users');
const ejs = require('ejs');
const rateLimit = require('express-rate-limit');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = YAML.load('./swagger.yaml');

//set view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//Static files
app.use(express.static('public'));

//parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//rate limiter
const limiter = rateLimit({
    windowMS: 1 * 15 * 1000, 
    max: 11,
    message: 'Too many requests, please try again later.'
});


//is a middleware
app.use(limiter);
app.use(mainRoutes);
app.use(userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


mongoose.
connect(uri)
.then(async ()=>{

    console.log(`Connected to MongoDB`);

    app.listen(port, ()=>{
        console.log(`Server is running on port ${port}`);
     });
     
    }).catch((err)=>{
    console.log(`Error connecting to MongoDB: ${err}`);
 });

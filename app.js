const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const mainRoutes = require('./routes/mainRoutes');


app.use(mainRoutes);



app.listen(port, ()=>{``
    console.log(`Server is running on port ${port}`);
});

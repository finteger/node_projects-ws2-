const express = require('express');
const router = express.Router();

//query parameter example
router.get('/search', (req, res) =>{
    const query = req.query.q;
    res.send(`Query term received: ${query}`);
});

//route parameter example
router.get('/users/:id', (req, res) => {
    res.send(`User ID received: ${req.params.id}`);
});

//middleware example
router.use((req, res, next) => {
    console.log(`Request URL: ${req.originalUrl}. Time: ${new Date()}`);
    next();
});


router.get('/', (req, res) =>{
    res.send('Hello World!');
});


module.exports = router;
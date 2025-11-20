const express = require('express');
const router = express.Router();


router.get('/search', (req, res) =>{
    const query = req.query.q;
    res.send(`Query term received: ${query}`);
});


router.get('/', (req, res) =>{
    res.send('Hello World!');
});


module.exports = router;
const express = require('express');
const router = express.Router();
const { readData } = require('../utils/file.js'); 

router.get('/home', (req, res)=>{
    res.render('home');
});

router.get('/api/v1/users', async (req, res) => {
      try {
      const data = await readData();
      return res.status(200).send(data);
      } catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
      }
});

module.exports = router;

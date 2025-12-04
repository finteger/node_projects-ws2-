const express = require('express');
const router = express.Router();
const { readData } = require('../utils/file.js'); 
const userController = require('../controllers/userController.js');

router.get('/home', (req, res)=>{
    res.render('home');
});

//URI endpoint for serving data of all users
router.get('/api/v1/users', async (req, res) => {
      try {
      const data = await readData();
      return res.status(200).send(data);
      } catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
      }
});

//this route handler is attached to form which relays request to controller function
router.post('/users', userController.createUser);


module.exports = router;

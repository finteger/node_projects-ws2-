const mongoose = require('mongoose');

//define user schema
const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true} 
});

//creating the User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;




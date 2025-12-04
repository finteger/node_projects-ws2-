const { readData, writeData } = require("../utils/file.js");

async function createUser(req, res) {
  try {
    //read the file data
    const data = await readData();

    //create logic to auto increment id
    const lastUser = data.users[data.users.length - 1];

    const nextUser = lastUser ? lastUser.id + 1 : 0;

    //create new user object
    const newUser = {
      id: nextUser,
      first_name: req.body.first_name,
      username: req.body.username,
      email: req.body.email,
    };

    //push new user to data.users array
    data.users.push(newUser);

    //write the data object to the file
    await writeData(data);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send(`Internal Server Error: ${error.message}`);
  }
}

module.exports = { createUser };

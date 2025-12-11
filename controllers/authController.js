const express = require("express");
const jwt = require("jsonwebtoken");

async function generateToken(req, res) {
  const secret_key = "your_secret_key"; // Ideally, use an environment variable

  const user = {
    id: 23,
    time: new Date(),
  };

  const token = jwt.sign(user, secret_key);

  res.send(token);
}

async function verifyToken(req, res) {
  const secret_key = "your_secret_key";

  //extract the token from the request header
  const token = req.header("Authorization")?.split(" ")[1];

  if (!token) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, secret_key);

    if(decoded){
        res.send("Token is valid.");
    } else {
        res.status(400).send("Invalid token.");
    }

  } catch (err) {
    res.status(500).send("Internal Server Error.");
}
}

module.exports = {
  generateToken,
  verifyToken,
};

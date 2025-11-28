const express = require('express');
const fs = require('fs').promises;
const filePath = './database.json';

async function readData(){
    try {
        const data = await fs.readFile(filePath, "utf-8");
        return JSON.parse(data);
    } catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

async function writeData(data){
    try {
      await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    } catch(error){
        res.status(500).send(`Internal Server Error: ${error.message}`);
    }
}

module.exports = {
    readData,
    writeData
};

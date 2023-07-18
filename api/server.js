//import

const express = require('express');
const server = express();
require ('dotenv').config();

//global middleware
server.use(express.json());

//router

server.get('/', (req,res)=> {
    res.json({message:"Server up and running."})
})


//error middleware


//export
module.exports = server;
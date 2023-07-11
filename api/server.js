//import

const express = require('express');
const server = express();

//global middleware


//router

server.get('/', (req,res)=> {
    res.json({message:"Server up and running."})
})


//error middleware


//export
module.exports = server;
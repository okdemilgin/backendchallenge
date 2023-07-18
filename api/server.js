//import

const express = require('express');
const server = express();
require ('dotenv').config();
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

//global middleware
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan("dev"));

//router

server.get('/', (req,res)=> {
    res.json({message:"Server up and running."})
})


//error middlewares
server.use((err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Server error!.." });
  });
//export
module.exports = server;
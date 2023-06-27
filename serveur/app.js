const express = require('express');
const mongoose = require("mongoose");
const furniture = require('./routes/testroute') // Route to the Api 
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
require("dotenv").config();

app.use(cors()); // enable cross-origin requests

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  // *************Connection to MongoDB*************
  mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

 // ********BODY-PARSER
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.urlencoded({extended: true}));

  app.use('/furniture', furniture);  // Api path
  module.exports = app;



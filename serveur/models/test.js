// import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');
// ****************************champs souhaites avec la methode Schema
const Test = mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model('Test', Test);


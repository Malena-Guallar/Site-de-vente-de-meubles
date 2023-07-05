// import { Schema, model } from 'mongoose';
const mongoose = require("mongoose");
// ****************************champs souhaites avec la methode Schema
const Article = mongoose.Schema({
  type: { type: String, required: false },
  status: { type: String, required: false },
  color: { type: Array, required: false },
  material: { type: Array, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  quantity: { type: Number, required: false },
  size_height: { type: Number, required: false },
  size_width: { type: Number, required: false },
  size_deep: { type: Number, required: false },
  picture: { type: Object, required: false },
  seller: { type: String, required: false },
});

module.exports = mongoose.model("Article", Article);

// type: { type: String, required: true },
//   status: { type: String, required: false },
//   color: { type: Array, required: true },
//   material: { type: Array, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   size_height: { type: Number, required: false },
//   size_width: { type: Number, required: false },
//   size_deep: { type: Number, required: false },
//   picture: { type: Object, required: false },
//   seller: { type: String, required: true },
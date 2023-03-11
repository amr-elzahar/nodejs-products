const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Product = new Schema({
  title: String,
  price: Number,
  describtion: String,
});

module.exports = mongoose.model("Product", Product);

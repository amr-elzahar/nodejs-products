const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/products")
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

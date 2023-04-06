const mongoose = require("mongoose");
const app = require("./app");

mongoose
  .connect(`mongodb://${process.env.MONGODB_HOST}:27017/products`)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

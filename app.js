const express = require("express");
const path = require("path");

const productsRoutes = require("./routes/products");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", productsRoutes);
app.get("/products", productsRoutes);
app.get("/add-product", productsRoutes);
app.post("/add-product", productsRoutes);

module.exports = app;

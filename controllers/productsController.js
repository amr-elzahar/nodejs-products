const path = require("path");

const Product = require("../models/Product");

exports.getHomePage = (req, res) =>
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));

exports.getProductsPage = (req, res) => {
  Product.find()
    .then((products) => res.render("products.ejs", { products }))
    .catch((err) => console.log(err));
};

exports.getAddProductPage = (req, res) =>
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));

exports.addNewProduct = (req, res) => {
  const enteredTitle = req.body.title;
  const enteredPrice = req.body.price;
  const enteredDescribtion = req.body.describtion;
  const product = new Product({
    title: enteredTitle,
    price: enteredPrice,
    describtion: enteredDescribtion,
  });

  product
    .save()
    .then((result) => {
      console.log("Sucessfully created!");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

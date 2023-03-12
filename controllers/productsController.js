const path = require("path");

const Product = require("../models/Product");

exports.getHomePage = (req, res) =>
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));

exports.getProducts = (req, res) => {
  Product.find()
    .then((products) => res.render("products.ejs", { products }))
    .catch((err) => console.log(err));
};

exports.getProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => res.render("product.ejs", { product }))
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

exports.deleteProduct = (req, res) => {
  const { id } = req.body;
  Product.findByIdAndRemove(id)
    .then((product) => {
      console.log("Sucessfully deleted!");
      res.redirect("/products");
    })
    .catch((err) => console.log(err));
};

exports.editProduct = (req, res) => {
  const { id } = req.params;
  Product.findById(id)
    .then((product) => {
      res.render("edit-product.ejs", { product });
    })
    .catch((err) => console.log(err));
};

exports.postEditProduct = (req, res) => {
  const { id } = req.body;
  Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((product) => {
      console.log("Sucessfully updated!");
      res.redirect("/products");
    })
    .catch((err) => console.log(err));
};

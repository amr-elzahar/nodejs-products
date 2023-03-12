const express = require("express");
const path = require("path");

const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.getHomePage);

router.get("/products", productsController.getProducts);
router.get("/products/:id", productsController.getProduct);
router.get("/add-product", productsController.getAddProductPage);
router.get("/edit-product/:id", productsController.editProduct);

router.post("/add-product", productsController.addNewProduct);
router.post("/delete-product", productsController.deleteProduct);
router.post("/edit-product", productsController.postEditProduct);

module.exports = router;

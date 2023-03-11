const express = require("express");
const path = require("path");

const productsController = require("../controllers/productsController");

const router = express.Router();

router.get("/", productsController.getHomePage);

router.get("/products", productsController.getProductsPage);
router.get("/add-product", productsController.getAddProductPage);

router.post("/add-product", productsController.addNewProduct);
module.exports = router;

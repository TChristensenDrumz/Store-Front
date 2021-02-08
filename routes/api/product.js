const router = require("express").Router();
const productController = require("../../controllers/productController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/:storeid")
    .get(productController.getProducts);

router.route("/singleProduct/:productid")
    .get(productController.getSingleProduct);

router.route("/create")
    .post(productController.createProduct);

router.route("/:productid")
    .put(productController.updateProduct);

router.route("/:productid")
    .delete(productController.deleteProduct);
    
module.exports = router;
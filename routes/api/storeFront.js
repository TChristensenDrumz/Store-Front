const router = require("express").Router();
const storeFrontController = require("../../controllers/storeFrontController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/allStores")
    .get(storeFrontController.getAllStores);

module.exports = router;
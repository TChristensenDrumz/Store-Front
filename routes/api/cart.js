const router = require("express").Router();
const cartController = require("../../controllers/cartController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/:userid")
    .get(cartController.getCart);

router.route("/addItem")
    .post(cartController.addItem);

router.route("/:itemid")
    .delete(cartController.removeItem);
module.exports = router;
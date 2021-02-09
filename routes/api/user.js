const router = require("express").Router();
const userController = require("../../controllers/userController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/register").post(userController.create);

router.route("/login").post(userController.login);

router.route("/update/:userId").put(userController.update);

router.route("/checkemail/:email").get(userController.checkEmail);

router.route("/:userid").get(userController.getUsersCart);

module.exports = router;

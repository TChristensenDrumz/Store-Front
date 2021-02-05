const router = require("express").Router();
const userController = require("../../controllers/userController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route('/register')
    .post(userController.create);

router.route('/login') 
    .post(userController.login);

router.route("/update/:userId")
    .put(userController.update);

module.exports = router;
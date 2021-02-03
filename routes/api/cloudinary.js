const router = require("express").Router();
const cloudinaryController = require("../../controllers/cloudinaryController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const { cloudinaryConfig } = require("../../config/middleware/cloudinaryConfig");
const { multerUploads } = require("../../config/middleware/multer");

router.route("/:imageType/:id")
    .post(cloudinaryConfig, multerUploads, cloudinaryController.uploadImage);

module.exports = router;
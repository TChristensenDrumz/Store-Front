const express = require("express");
const router = express.Router();
const app = express();
const cloudinaryController = require("../../controllers/cloudinaryController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const { cloudinaryConfig } = require("../../config/middleware/cloudinaryConfig");
const { multerUploads } = require("../../config/middleware/multer");

app.use("*", cloudinaryConfig);

router.route("/:imageType/:id")
    .post(multerUploads, cloudinaryController.uploadImage);

module.exports = router;
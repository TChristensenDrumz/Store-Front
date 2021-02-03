const path = require("path");
const router = require("express").Router();
const storeFrontRoutes = require("./storeFront");
const userRoutes = require("./user");
const storeRoutes = require("./store");
const productRoutes = require("./product");
const cartRoutes = require("./cart");
const imageRoutes = require("./cloudinary");

router.use("/storefront", storeFrontRoutes);
router.use("/user", userRoutes);
router.use("/store", storeRoutes);
router.use("/product", productRoutes);
router.use("/cart", cartRoutes);
router.use("/image", imageRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"));
  });

  module.exports = router;
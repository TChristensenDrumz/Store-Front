const db = require("../models");
const { uploader } = require("../config/middleware/cloudinaryConfig");
const { getContent } = require("../config/middleware/multer");

module.exports = {

    uploadImage: async function(req, res) {
      const imageType = req.params.imageType;
      if (req.file) {
        const file = await getContent(req);
        return uploader.upload(file.content).then(result => {
          const image = result.url;
          const bgImage = (res, image, storeid) => {
            db.Store.update({
              background_image: image
            },
            {
              where: {
                id: storeid
              }
            }).then(result => {
              return res.json({
                message: "Your image has been uploaded successfully",
                data: {
                  image
                }
              });
            });
          };
      
          const aboutImage = (res, image, storeid) => {
            db.Store.update({
              about_image: image
            },
            {
              where: {
                id: storeid
              }
            }).then(result => {
              return res.json({
                message: "Your image has been uploaded successfully",
                data: {
                  image
                }
              });
            });
          };
      
          const prodImage = (res, image, productid) => {
            db.Product.update({
              image: image
            },
            {
              where: {
                id: productid
              }
            }).then(result => {
              return res.json({
                message: "Your image has been uploaded successfully",
                data: {
                  image
                }
              });
            });
          };

          res.json(image);

          switch (imageType) {
            case "bg-image":
              bgImage(res, image, req.params.id);
              break;
            case "about-image":
              aboutImage(res, image, req.params.id);
              break;
            case "prod-image":
              prodImage(res, image, req.params.id);
              break;
            default:
              return;
          }
        }).catch(err => res.json({
          message: "Something went wrong while processing your request",
          data: {
            err
          }
        }));
      };
    },

}
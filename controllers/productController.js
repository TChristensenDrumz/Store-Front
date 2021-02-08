const db = require("../models");

module.exports = {

    getProducts: function(req, res) {
        db.Product.findAll({
            where: {
              StoreId: req.params.storeid
            },
            order: [
                ["popularity", 'DESC']
            ],
            include: [db.Store]
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    getSingleProduct: function(req, res) {
        db.Product.findOne({
            where: {
              id: req.params.productid
            },
            include: [db.Store]
          }).then(result => {
              res.json(result);
          })
          .catch(err => {
              res.json(err);
          });
    },

    createProduct: function(req, res) {
        console.log(req);
        db.Product.create(req.body).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    updateProduct: function(req, res) {
        console.log(req);
        db.Product.update(req.body, {
            where: {
              id: req.params.productid
            }
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    deleteProduct: function(req, res) {
        db.Product.destroy({
            where: {
              id: req.params.productid
            }
          }).then(result => {
            res.json(result);
          })
          .catch(err => {
              res.json(err);
          });
    }
}
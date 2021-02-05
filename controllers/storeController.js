const db = require("../models");

module.exports = {

    getStoreInfo: function(req, res) {
        db.Store.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Product],
            order: [
                [db.Product, "popularity", "DESC"]
            ]
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    getStoreByOwner: function(req, res) {
        db.Store.findOne({
            where: {
              UserId: req.params.userId
            },
            include: [db.Product]
          }).then(result => {
              console.log(result)
              res.json(result);
          })
          .catch(err => {
            res.json(err);
        });
    },

    createStore: function(req, res) {
        db.Store.create({
            store_name: req.body.store_name,
            UserId: req.body.userId
          }).then(result => {
              res.json(result);
          })
          .catch(err => {
              res.json(err);
          });
    },

    updateStore: function(req, res) {
        db.Store.update(req.body, {
            where: {
              id: req.params.storeid
            }
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    deleteStore: function(req, res) {
        db.Store.destroy({
            where: {
              id: req.params.storeid
            }
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }

}
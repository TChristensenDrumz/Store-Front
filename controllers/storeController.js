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
        db.User.update({isSeller: false}, {
            where: {
                id: req.params.userId
            }
        }).then(result => {
            db.Store.destroy({
                where: {
                    id: req.params.storeid
                }
            }).then(data => {
                res.json(data);
            });
        }).catch(err => {
            console.log(err);
            res.json(err);
        });
    }

    // deleteStore: function(req, res) {
    //     db.Store.destroy({
    //         where: {
    //           id: req.params.storeid
    //         }
    //     }).then(result => {
    //         db.User.update({isSeller: false}, {
    //             where: {
    //                 id: req.body.userId
    //             }
    //         }).then(data => {
    //             res.json(data);
    //         });
    //     })
    //     .catch(err => {
    //         res.json(err);
    //     });
    // }

}
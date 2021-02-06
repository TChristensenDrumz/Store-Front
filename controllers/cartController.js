const db = require("../models");

module.exports = {

    getCart: function(req, res) {
        db.Cart.findAll({
            where: {
                UserId: req.params.userid
            },
            include: {
                all: true
            }
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    addItem: function(req, res) {
        db.Product.increment({popularity: req.body.quantity}, { where: { id: req.body.productid }});
        db.Cart.create({
            quantity: req.body.quantity,
            price: req.body.price,
            UserId: req.body.userid,
            ProductId: req.body.productid
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    },

    removeItem: function(req, res) {
        console.log(req)
        db.Cart.destroy({
            where: {
                id: req.params.itemid
            }
        }).then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        });
    }
}
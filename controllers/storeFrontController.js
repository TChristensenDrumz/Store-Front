const db = require("../models");

module.exports = {

    getAllStores: function(req, res) {
        db.Store.findAll({
            include: [db.Product, db.User],
            order: [
                [db.Product, "popularity", "DESC"]
            ]
          }).then(result => {
              res.json(result);
          })
          .catch(err => {
              res.json(err);
          });
    }
}
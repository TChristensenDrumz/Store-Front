module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false
        }
    });
    Cart.associate = models => {
        Cart.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
        Cart.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            },
            onDelete: 'cascade'
        });
    };
    return Cart;
};
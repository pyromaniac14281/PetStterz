module.exports = function (sequelize, DataTypes) {

    var Review = sequelize.define('Review', {
        body: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.INTEGER
        }

    })
    Review.associate = function (models) {
    //     Review.belongsTo(models.Provider, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     })
    }

    return Review;
}
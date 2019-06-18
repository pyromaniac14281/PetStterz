module.exports = function (sequelize, DataTypes) {

    var Provider = sequelize.define("Provider", {

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
          comments: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        ratings: {
            type: DataTypes.INTEGER
            // allowNull defaults to true
        },
        pets: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        mobileno: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        url: {
            type:DataTypes.STRING
        }
    })
    //     Provider.associate = function (models) {
    //     User.hasMany(models.Review, {
    //         onDelete: "cascade"
    //     })
    // }
    return Provider;
};
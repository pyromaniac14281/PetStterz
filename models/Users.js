module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type: DataTypes.INTEGER,
            // allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zipcode: {
            type: DataTypes.INTEGER,
            // allowNull: false
        }
    });



    return User;
};
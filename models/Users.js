const Sequelize = require('sequelize')
const db = require('../config/dbConnection')

const UsersignUp = db.define('user', {
    userName: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    confirmPassword: {
        type: Sequelize.STRING
    },

})

module.exports = UsersignUp;
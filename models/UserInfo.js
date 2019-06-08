const orm = require('../config/orm')

var userInfo = {
    createUser: function (user, cb) {
        orm.createUser('user', user, function (res) {
            cb(res)
        })
    },

    selectId: function (user, id, cb) {
        orm.selectId('user', user, id, function (res) {
            cb(res)
        })
    },
};

module.exports = userInfo;
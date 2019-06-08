const orm = require('../config/orm')

var userInfo = {
    selectAll: function (user, cb) {
        orm.selectAll('user', user, function (res) {
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
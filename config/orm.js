var db = require("./connection");


var orm = {

    selectAll: function (tableName, callback) {
        queryString = "SELECT * FROM" + tableName + ";"

        db.query(queryString, (err, results) => {
            if (err) throw err;
            console.log(results);
            callback(results)
        })
    },

    selectId: function (tableName, id, callback) {
        queryString = "SELECT firstName FROM" + tableName + "WHERE id =" + id + ";"

        db.query(queryString, (err, results) => {
            if (err) throw err;
            console.log(results);
            callback(results)
        })
    }



}

module.exports = orm
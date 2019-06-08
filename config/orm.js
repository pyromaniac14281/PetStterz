var db = require("./connection");


var orm = {

    //create a new user with info from the sign up page.
    createUser: function (tableName, callback) {
        //sql query to be used
        // INSERT INTO users (first_name, last_name, street_address, zipcode, email_address,password) VALUES()
        queryString = `INSERT INTO ${tableName} ${first_name}, ${last_name}, ${street_address}, ${zipcode}, ${email_address}, ${password}`

        db.query(queryString, (err, results) => {
            if (err) throw err
            console.log(results);
            callback(results)

        })
    },

    //get user profile info

    userProfile: function (tableName, callback) {
        queryString = "SELECT * FROM " + tableName + ";"

        db.query(queryString, (err, results) => {
            if (err) throw err;
            console.log(results);
            callback(results)
        })
    },

    selectId: function (tableName, id, callback) {
        queryString = "SELECT firstName FROM " + tableName + "WHERE id =" + id + ";"

        db.query(queryString, (err, results) => {
            if (err) throw err;
            console.log(results);
            callback(results)
        })
    }



}

module.exports = orm
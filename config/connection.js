require('dotenv').config()
var mysql = require('mysql')
config = require('./dbConnection')

var db = mysql.createConnection({
    host: config.database_host,
    user: config.database_user,
    password: config.database_password,
    database: config.database_name
});


db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
})

module.exports = db
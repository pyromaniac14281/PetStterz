require('dotenv').config();
let config = require('./dbConnection')

let mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost', //config.database_host,
    user: 'root', //config.database_user,
    password: '', //config.database_password,
    database: 'petstterz_db' //config.database_name
});

db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + db.threadId);
})

module.exports = db
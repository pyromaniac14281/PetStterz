
let express = require('express')
let exphbs = require('express-handlebars')
let app = express()
let path = require('path')
let PORT = process.env.PORT || 8080

//setup db connection
let db = require('./config/dbConnection')

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());






//get routes
// Import routes and give the server access to them.
var router = require("./controllers/routeController");

app.use(router)

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
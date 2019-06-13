let express = require('express')
let exphbs = require('express-handlebars')
let app = express()
let path = require('path')
let PORT = process.env.PORT || 8080
var bodyParser = require('body-parser')
// adding multer package which helps with image processing
var multer = require('multer')

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Set Handlebars.
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//get routes
// Import routes and give the server access to them
const userRouter = require("./controllers/userController");
const commentRouter = require("./controllers/commentController");
// let router = require("./controllers/commentController");


app.use(userRouter, commentRouter);
// app.use();

//db connection
var db = require("./models");

db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// Set Handlebars.
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// get routes
// Import routes and give the server access to them
const userRouter = require('./controllers/userController');
const commentRouter = require('./controllers/commentController');
const providerRouter = require('./controllers/providerController');
// let router = require("./controllers/commentController");


app.use(userRouter, commentRouter, providerRouter);
// app.use();

// db connection
const db = require('./models');

db.sequelize.sync({
    force: false//This action will either maintain(false) or drop(true) the db 
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
module.exports = app;

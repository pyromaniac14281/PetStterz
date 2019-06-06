let express = require('express')
let app = express()
let path = require('path')
let PORT = process.env.PORT || 8080


// Requiring our models for syncing
let models =require('./models/SignUpModel');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);
//connect to port/server
app.listen(PORT, () => console.log('Listening on PORT: ', PORT))
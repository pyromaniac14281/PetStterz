const express = require('express')
const router = express.Router()
const db = require('../config/dbConnection')
const user = require('../models/UserInfo')

router.get('/blah', (req, res) => {

    user.selectAll(function (userData) {
        res.render("login", {
            userLogin: userData
        });
    })
    // get user profile

})
module.exports = router;
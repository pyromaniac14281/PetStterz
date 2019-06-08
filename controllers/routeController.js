const express = require('express')
const router = express.Router()
const db = require('../config/dbConnection')
const user = require('../models/UserInfo')

router.get('/profile', (req, res) => {

    user.userProfile(function (userData) {
        // console.log(userData);

        res.render("userprofile", {
            userprofile: userData
        });

        res.end()
    })
    // get user profile

})


module.exports = router;
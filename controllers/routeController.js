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


router.get('/register', (req, res) => {
    res.render('signup')
})


//post signup data to the database.
router.post('/register', (req, res) => {

    console.log(req.body)
    
    res.send(req.body)

})

module.exports = router;
const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/register', (req, res) => {
    res.render('signup')
})

//post signup data to the database.
router.post('/register', (req, res) => {
    console.log('this is body', req.body);



    db.User.create(req.body)
        .then(user => {
            // console.log('\n', '\n', user);
            console.log('from the server', user);

            res.send(user)
            // res.redirect('profile')
        })
        .catch((err) => {
            console.log(err)
            res.send(err)
        });
})

router.get('/profile/:id', (req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        // console.log("this is data", data);
        console.log("this is data", data.zipcode);
        res.send(data)
    })


})

module.exports = router;
const express = require('express');
const router = express();
const db = require('../models');

// Get comments for a specific user
router.get('/user', (req, res) => {
    db.Review.findAll({
        include: [{
            model: db.User
        }]
    }).then(data => {
        res.send(data)
    });
})

//creates new comment 
router.post('/comments', (req, res) => {
    console.log('This is the request', req.body.body);

    db.Review.create(req.body)
        .then(reviews => {
            console.log(reviews);
            res.json(reviews)

        }).catch((err) => {
            console.log(err);
        })


})
router.get('/comments', (req, res) => {
    res.json("hey2")
})

module.exports = router

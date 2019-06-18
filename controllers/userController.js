const express = require('express')
const router = express.Router()
const db = require('../models')


//displays the main page when the user hits this route.
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/register', (req, res) => {
    res.render('signup')
})

//post signup data to the database.
router.post('/register', (req, res) => {
    console.log('this is body', req.body);

    db.User.create(req.body)
        .then(user => {

            console.log('from the server', user);

            res.json({ status: 200, message: user.dataValues.id});
            // res.redirect('profile')
        })
        .catch((err) => {
            console.log(err)
            res.json({ status: 500, message: err.message });
        });
})

router.get('/profile/:id', (req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        res.render('profile', {
            fullname: data.firstName + " " + data.lastName,
            firstname: data.firstName,
            lastname: data.lastName,
            email: data.email,
            phone: data.mobile,
            address: data.address,
            zipcode: data.zipcode, 
            userImageURL: data.userImageURL

        })
        console.log(data);
        
    })

})

router.get('/map', (req, res) => {
    res.render('maps')
})

router.get('/dogs', (req, res) => {
    res.render('dogs')
})



module.exports = router;

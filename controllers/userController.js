const express = require('express');
const router = express.Router();
const db = require('../models');
const expresImages = require('express-fileupload');


//route to test image upload.
router.use(expresImages());

router.post('/blah', (req, res) => {
    if (req.files) {

        var file = req.files.filename;
        var filename = file.name;
        file.mv('./uploads/' + filename, (err) => {
            if (err) {
                console.log(err)
                res.send(err)
            } else {

                res.send("done")

            }
        })
    }

})


//displays the main page when the user hits this route.
router.get('/', (req, res) => {
    res.render('home')
})

router.get('/register', (req, res) => {
    res.render('signup')
})

//post signup data to the database.
//upload single is being referenced by multer (img handler to upload a single image called userImage)
// router.post('/register', upload.single('userImage'), (req, res) => {
//     //request file is from multer
//     console.log(req.file);

//     console.log('this is body', req.body);

//     db.User.create(req.body)
//         .then(user => {

//             console.log('from the server', user);

//             res.send(user)
//             // res.redirect('profile')
//         })
//         .catch((err) => {
//             console.log(err)
//             res.send(err)
//         });
// })

router.get('/profile/:id', (req, res) => {
    db.User.findOne({
        where: {
            id: req.params.id
        }
    }).then((data) => {
        // console.log("this is data", data);
        console.log("this is data", data.zipcode);
        res.send({
            zipcode: data.zipcode
        })
    })

})

module.exports = router;



// ***** Stopped at 15.57 https://www.youtube.com/watch?v=srPXMt1Q0nY

//using multer package to upload images:
// const multer = require('multer');
// //determines how files get stored
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {

//         //handle errors and also choses location to store files
//         cb(null, './uploads/')

//     },
//     filename: function (req, file, cb) {
//         //adds the current date to the original file name
//         cb(null, new Date().toISOString() + file.originalname)

//     }
// })

// const fileFilter = (req, file, cb) => {
//     if (file.mimetype === '/image/jpeg' || file.mimetype === 'image/png') {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }
// //passing our storage startegy setup to multer setting up limit to restrict image size
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
// });
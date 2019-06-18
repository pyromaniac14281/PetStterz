const express = require('express');
const router = express.Router();
const db = require('../models');


// display provider info to the page:
router.get('/provider/:id', (req, res) => {
	db.Provider.findOne({
		where: {
			id: req.params.id
		}
	})
.then((data) => {	
		res.render('provider', {
			fullname: data.firstName + ' ' + data.lastName,
			ratings: data.ratings,
			pets: data.pets,
			contactInfo: data.mobileno,
			comments:data.comments,
			imageurl:data.url,
			email:data.email,
			aboutMe:data.aboutMe
		});

	});

});

router.get('/provider', (req,res)=>{
	// res.render('provider', {
	
	// })
	console.log(res);
	
	res.send(res)

})

module.exports = router;

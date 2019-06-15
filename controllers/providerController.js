const express = require('express');
const router = express.Router();
const db = require('../models');


// display provider info to the page:
router.get('/allproviders/:id', (req, res) => {
	db.Provider.findOne({
		where: {
			id: req.params.id
		}
	}).then((data) => {
		console.log(data);
		res.render('providerProfile', {
			fullname: data.firstName + ' ' + data.lastName,
			ratings: data.ratings,
			pets: data.pets,
			contactInfo: data.mobileno
		});

	});
});



module.exports = router;
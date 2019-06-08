const express = require('express');
const router = express.Router();

let User = require('../models/Users');

// Registration form
router.get('/register', (eq, res) => {
    res.render('register')
})
var firebase = require('firebase');
var firebaseconn = require('../config/firebaseConfig')

var fb = firebase.initializeApp(firebaseconn);
FirebaseDB = fb.database()
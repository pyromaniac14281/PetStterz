db = require('./connection')

//this file contains the functions that pull the login credentials from the db. 
/*
1. SignUp is called when the user is signing up
2. Sign in is for already existisng users
3.Convert to Provider is for clients who want to become providers


Note this table references the connection file in the config directory.
it is exported to ********** and ****
*/
let credentials = {
    signUp: function () {

    },
    signIn: function () {

    },

    convertToProvider: function () {

    }
}


module.exports = credentials
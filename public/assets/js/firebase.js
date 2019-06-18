//connect to firebase
// const firebase = require('firebase');
// const firebaseconn = require('../../../config/firebaseConfig')

// const fb = firebase.initializeApp(firebaseconn);
// FirebaseDB = fb.database()


var firebaseConfig = {
    apiKey: "AIzaSyAznp5IiRCExfYhahEoU7S63ZaeoPjlnG0",
    authDomain: "gtcbc-coding.firebaseapp.com",
    databaseURL: "https://gtcbc-coding.firebaseio.com",
    projectId: "gtcbc-coding",
    storageBucket: "gtcbc-coding.appspot.com",
    messagingSenderId: "46793546586",
    appId: "1:46793546586:web:aefd434c3440f704"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
db = firebase.database()



//make the post request to '/register'
function signUpSubmit(e) {
    e.preventDefault()
    let firstName = document.getElementById('first_name').value.trim()
    let lastName = document.getElementById('last_name').value.trim()
    let mobile = document.getElementById('mob_no').value.trim()
    let userName = document.getElementById('user_name').value.trim()
    let password = document.getElementById('password').value.trim()
    let confirmPassword = document.getElementById('confirm-password').value.trim()
    let address = document.getElementById('address').value.trim()
    let zipcode = document.getElementById('zipcode').value.trim()

    var person = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        mobile: mobile,
        address: address,
        zipcode: zipcode

    }

    if (comparePasswords()) {
        postSignUpData(person)

    } else {
        console.log("wrong password");
    }

}
//compare password logic not working
function comparePasswords(password, confirmPassword) {
    return (password === confirmPassword)

}

function postSignUpData(person) {
    // console.log('inside fetch post from client', person);

    fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                firstName: person.firstName,
                lastName: person.lastName,
                userName: person.userName,
                password: person.password,
                confirmPassword: person.confirmPassword,
                mobile: person.mobile,
                address: person.address,
                zipcode: person.zipcode
            })
        })
        .then((res) => res.json())
        .then((data) => {
            console.log("Success");

            //pushing data to firebase
            pushDatatoFirebase(data)

        }).catch((err) => console.log(err))

    // function clearfields()

}

function pushDatatoFirebase(data) {
    console.log("I am in the post push");

    console.log('This is in Push to fb', data.zipcode);

    var newAddress = {
        zipcode: data.zipcode,
        address: data.address
    }


    db.ref().push(newAddress)

}
//fix clear functionality
// function clearfields() {

//     firstName.value("")
//     lastName.value("")
//     mobile.value("")
//     userName.val("")
//     password.val("")
//     confirmPa.va("")
//     address.val("")
//     zipcode.val("")

// }

// document.getElementById('btn-signup').addEventListener('click', signUpSubmit)
// document.getElementById('btn-login').addEventListener('click', login)
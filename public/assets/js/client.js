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

function comparePasswords(password, confirmPassword) {
    return (password === confirmPassword)

}

function postSignUpData(person) {
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
        }).then((res) => res.json())
        .then((data) => {
            console.log("Success");
        }).catch((err) => console.log(err))
}

document.getElementById('btn-signup').addEventListener('click', signUpSubmit)
// document.getElementById('btn-login').addEventListener('click', login)
//make the post request to '/register'
function signUpSubmit(e) {
    e.preventDefault()


    let firstName = document.getElementById('first_name').value.trim()
    let lastName = document.getElementById('last_name').value.trim()
    let mobileNum = document.getElementById('mob_no').value.trim()
    let userName = document.getElementById('user_name').value.trim()
    let password = document.getElementById('password').value.trim()
    let confirmPassword = document.getElementById('confirm-password').value.trim()

    var person = {
        firstName: firstName,
        lastName: lastName,
        mobileNum: mobileNum,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword
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
                mobileNum: person.mobileNum,
                userName: person.userName,
                password: person.password,
                confirmPassword: person.confirmPassword
            })
        }).then((res) => res.json())
        .then((data) => {
            console.log("This is the data", data);
        }).catch((err) => console.log(err))
}

document.getElementById('btn-signup').addEventListener('click', signUpSubmit)
// document.getElementById('btn-login').addEventListener('click', login)
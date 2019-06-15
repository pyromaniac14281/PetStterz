//make the post request to '/register'
function signUpSubmit(e) {
    e.preventDefault()
    const firstName = document.getElementById('first_name').value.trim()
    const lastName = document.getElementById('last_name').value.trim()
    const mobile = document.getElementById('mob_no').value.trim()
    const userName = document.getElementById('user_name').value.trim()
    const password = document.getElementById('password').value.trim()
    const confirmPassword = document.getElementById('confirm-password').value.trim()
    const address = document.getElementById('address').value.trim()
    const zipcode = document.getElementById('zipcode').value.trim()

    const person = {
        firstName: firstName,
        lastName: lastName,

        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        mobile: mobile,
        address: address,
        zipcode: zipcode

    }
    console.log('before fetch post from client', person);
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
    console.log('inside fetch post from client', person);

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
    }).then(res => res.json())
      .then((data) => {
          console.log("Success --> ", data);
          const userId = data.message;
          localStorage.setItem('userId', userId);
          window.location.href = '/profile/' + userId;
          
        }).catch((err) => console.log(err))

    // function clearfields()

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

document.getElementById('btn-signup').addEventListener('click', signUpSubmit)
// document.getElementById('btn-login').addEventListener('click', login)

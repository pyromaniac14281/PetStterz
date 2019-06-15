// function addImage () {

//Cloudinary 
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/kingdomb/upload';
const CLOUDINARY_UPLOAD_PRESET = 'hfcvya1y';
const fileUpload = document.getElementById('file-upload');

fileUpload.addEventListener('change', function (event) {
    event.preventDefault();

  let file = event.target.files[0];
  let formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'//'Content-Type': 'application/json'
  },

  data: formData

  }).then (function (res) {

    // console.log(res);
    var imgurl = res.data.secure_url

    console.log(imgurl);

    //signUpSubmit(imgurl);
    return imgurl;
    

  }).catch (function (err) {

    console.log(err);
    
  });
});
// };

//make the post request to '/register'
function signUpSubmit(e, imgurl) {
    e.preventDefault();
    const firstName = document.getElementById('first_name').value.trim()
    const lastName = document.getElementById('last_name').value.trim()
    const mobile = document.getElementById('mob_no').value.trim()
    const userName = document.getElementById('user_name').value.trim()
    const password = document.getElementById('password').value.trim()
    const confirmPassword = document.getElementById('confirm-password').value.trim()
    const address = document.getElementById('address').value.trim()
    const zipcode = document.getElementById('zipcode').value.trim()
    // const userImageURL = imgurl//document.getElementById('file-upload').value.trim()

    const person = {
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        password: password,
        confirmPassword: confirmPassword,
        mobile: mobile,
        address: address,
        zipcode: zipcode,
        userImageURL: imgurl

    }
        postSignUpData(person)
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
                zipcode: person.zipcode,
                userImageURL: person.userImageURL
            })
    }).then(res => res.json())
      .then((data) => {
          console.log("Success --> ", data);
          const userId = data.message;
          localStorage.setItem('userId', userId);
          window.location.href = '/profile/' + userId;
        }).catch((err) => console.log(err))


}

document.getElementById('btn-signup').addEventListener('click', signUpSubmit)//, addImage

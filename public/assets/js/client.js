// function addImage () {

//Cloudinary 
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/kingdomb/upload';
const CLOUDINARY_UPLOAD_PRESET = 'hfcvya1y';  
let userFile;
let userName;
let firstName;
let lastName;
let mobile;
let email;
let address;
let zipCode;
let userImageURL;

//firebase config
    var config = {
        apiKey: "AIzaSyCQUPXI0N7-b4bOpNlb6n8ML1p6YW5VJ48",
        authDomain: "ronwab-8dbcd.firebaseapp.com",
        databaseURL: "https://ronwab-8dbcd.firebaseio.com",
        projectId: "ronwab-8dbcd",
        storageBucket: "ronwab-8dbcd.appspot.com",
        messagingSenderId: "148535054528"
    };
    firebase.initializeApp(config);
    database = firebase.database()




document.getElementById('file-upload').addEventListener('change', function (event) {
    event.preventDefault();
   userFile = event.target.files[0];
})

document.getElementById("btn-signup").addEventListener("click", function(e) {
  e.preventDefault();
    userName = document.getElementById('user_name').value.trim()
    firstName = document.getElementById('first_name').value.trim()
    lastName = document.getElementById('last_name').value.trim()
    email = document.getElementById('email').value.trim()
    mobile = document.getElementById('mob_no').value.trim()
    address = document.getElementById('address').value.trim()
    zipCode = document.getElementById('zipcode').value.trim()
    userImageURL = document.getElementById('file-upload').value.trim();

  let formData = new FormData();
  formData.append('file', userFile);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
    url: CLOUDINARY_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'//'Content-Type': 'application/json'
  },

  data: formData

  }).then (function (res) {
    const imgAssign = res.data.secure_url;

    console.log(imgAssign);
    postSignUpData(imgAssign);
  }).catch (function (err) {
    console.log(err); 
  });
  function postSignUpData(imgAssign) {
    console.log('inside fetch post from client', imgAssign  );

    fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobile: mobile,
                address: address,
                zipcode: zipCode,
                userImageURL: imgAssign
            })
    }).then(res => res.json())
      .then((data) => {
          console.log("Success --> ", data);
          const userId = data.message;
          localStorage.setItem('userId', userId);
          window.location.href = '/profile/' + userId;

        //post to fb
        postToFirebase()

        }).catch((err) => console.log(err));
}

function postToFirebase(data){
 database.ref().push(data)


}



});
// };

// document.getElementById('btn-signup').addEventListener('click', signUpSubmit)//, addImage

// // search for a specific type of dog
// // var express = require('express')
// // var app = express()

var searchString = document.getElementById('searchDogInfo').value.trim()

// var url2 = 'https://dog.ceo/api/breed/' + searchString + '/images/random';

// function getDogInfo() {

// // GET request for remote image
// axios({
//   method: 'get',
//   url: url2,
//   responseType: 'image'
// })
//   .then(function(res) {
//   res.render(response);
  
// });
// }


// // function getDogInfo() {

// //     // var url = "https://api.thedogapi.com/v1/breeds/search?q="+ searchString;
// //     var url2 = 'https://dog.ceo/api/breed/' + searchString + "/images/random";

  
// //     // fetch(url, {
// //     //   method: get,
// //     //   headers: {
// //     //     'x-api-key': '5f3e22bb-9492-4bf7-a78c-51a30219b72a'
// //     //   }
// //     // }).then((data) => {

// //     //   console.log(data);
      

  
// //     //   res.render('blah', {
// //     //     name: res.body.name,
// //     //     life_span: res.body.life_span,
// //     //     bred_for: res.body.bred_for,
// //     //     group: res.body.breed_group,
// //     //     weight: res.body.weight.metric
// //     //   })
// //     // }).catch((err) => {
// //     //   console.log(err);
      
// //     // })
// //   }


function getDogInfo(searchString){
 
 const url = 'https://dog.ceo/api/breed/' + searchString + "/images/random";


fetch(url).then(data=>console.log(data));

};  

document.getElementById('searchDog').addEventListener('click', getDogInfo)

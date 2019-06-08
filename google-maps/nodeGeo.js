var Geoservices = require('geoservices');
 
var client = new Geoservices();

client.geocode({ singleLine: "920 SW 3rd Ave, Portland, OR 97201" }, function (err, result) {
    if (err) {
      console.error("ERROR: " + err);
    } else {
      console.log("Found it at " + result.candidates[0].location.y
      + ", " + result.candidates[0].location.x);
    }
  });

  client.geocode.reverse({ location: "-122.67633658,45.51673243" },
  function (err, result) {
    if (err) {
      console.error("ERROR: " + err);
    } else {
      console.log("Found it at " + result.address.Address + ", " + result.address.City);
    }
  }
);
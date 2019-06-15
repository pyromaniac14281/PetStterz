

function initMap() {
    var contentString;
    let userLocation;

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: Number(33.749),
            lng: Number(-84.388),
        }
    });

    var config = {
        apiKey: "AIzaSyCQUPXI0N7-b4bOpNlb6n8ML1p6YW5VJ48",
        authDomain: "ronwab-8dbcd.firebaseapp.com",
        databaseURL: "https://ronwab-8dbcd.firebaseio.com",
        projectId: "ronwab-8dbcd",
        storageBucket: "ronwab-8dbcd.appspot.com",
        messagingSenderId: "148535054528"
    };
    
    firebase.initializeApp(config);
    
    var myLatLng = firebase.database().ref("/");

    myLatLng.on("value", function (snapShot) {
        
        var data = snapShot.val(); 

        for (var key in data) {
            userLocation = data[key].address;
            pinName = data[key].userName;
            // imageurl = data[key].urlfield;
            // imageTitleField = data[key].imageTitleField;
            // DescriptionField = data[key].DescriptionField
            console.log(userLocation);
            console.log(pinName);
            // console.log(imageurl);
            // console.log(imageTitleField);

            contentString = `<h4>Piece: ${data[key].imageTitleField}</h4> <br> <img src="${imageurl}" width="180px"> <br> <h5>Artist: ${pinName}<h/5><br> <p>Description: ${DescriptionField}</p>`;
            addToMarker(userLocation, pinName, contentString);
        }

        function addToMarker(userLocation, pinName, contentString) {

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: pinName
            });

            marker.addListener("click", function () {
                infowindow.open(map, marker);
            });
        }
    });
}
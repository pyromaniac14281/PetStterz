function initMap() {
    var contentString;
    let userLocation;
    var pinAddess;
    var pinTitle;

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: {
            lat: Number(33.749),
            lng: Number(-84.388),
        }
    });

    var myLatLng = firebase.database().ref("/");

    myLatLng.on("value", function (snapShot) {
        
        var data = snapShot.val(); 

        for (var key in data) {
            userLocation = data[key].locationCoodsvals;
            pinName = data[key].userNameField;
            imageurl = data[key].urlfield;
            imageTitleField = data[key].imageTitleField;
            DescriptionField = data[key].DescriptionField
            console.log(userLocation);
            console.log(pinName);
            console.log(imageurl);
            console.log(imageTitleField);

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
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


    const dbRefObject = firebase.database().ref();

      dbRefObject.on('value', function (snapShot) {
        
        var data = snapShot.val(); 

        for (var key in data) {
            userLocation = data[key].address;
            pinName = data[key].userName;
            
            console.log(userLocation);
            console.log(pinName);
            
            contentString =  `<h5>User: ${pinName}<h/5>`;
            addToMarker(pinName, contentString);
        }
        
        function get_coords(address)
        {
            var gc      = new google.maps.Geocoder(),
                opts    = { 'address' : address };
        
            gc.geocode(opts, function (results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {   
                    var loc     = results[0].geometry.location,
                        latCoods     = results[0].geometry.location.lat();
                        lngCoods     = results[0].geometry.location.lng();
                        console.log(latCoods);
                        console.log(lngCoods);
                    
                        var coods = {lat: Number(latCoods),
                                     lng: Number(lngCoods)}
                                 console.log(coods)

                        
                    // Success.  Do stuff here.
                }
                else
                {
                    // Ruh roh.  Output error stuff here
                }
            });
        }
        get_coords(userLocation);
        

        function addToMarker(userLocation, pinName, contentString) {

            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: {
                    lat: Number(33.749),
                    lng: Number(-84.388),
                },
                map: map,
                title: pinName
            });

            marker.addListener("click", function () {
                infowindow.open(map, marker);
            });
        }
    });
}
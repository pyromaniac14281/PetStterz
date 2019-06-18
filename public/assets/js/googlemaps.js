function initMap() {
    var contentString;
    var userLocation;

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
        console.log("this is data" , data);

        for (var key in data) {
            userLocation = data[key].address;
            pinName = data[key].userName;
            contentString =  `<h5>User: ${pinName}<h/5>`;
            
            get_coords(userLocation, pinName, contentString);
        }
        
        function get_coords(userLocation, pinName, contentString)
        {
            var gc      = new google.maps.Geocoder(),
                opts    = { 'address' : userLocation };
        
            gc.geocode(opts, function (results, status)
            {
                if (status == google.maps.GeocoderStatus.OK)
                {   
                    var loc     = results[0].geometry.location,
                        latCoods     = results[0].geometry.location.lat();
                        lngCoods     = results[0].geometry.location.lng();
                    
                        var coods = {lat: Number(latCoods),
                                     lng: Number(lngCoods)}

                    addToMarker(coods, pinName, contentString);  
                  // Success.  Do stuff here.
                }
                else
                { console.log('err in get_coords')
                    // Ruh roh.  Output error stuff here
                }
            });
        }
        
        
        function addToMarker(coods, pinName, contentString) {
            
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });

            var marker = new google.maps.Marker({
                position: coods,
                map: map,
                title: pinName
            });
            
            marker.addListener("click", function () {
                infowindow.open(map, marker);
            });
        }
    });
}

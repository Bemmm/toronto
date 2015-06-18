function initFancyBox() {
    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 600,
        closeEffect: 'fade',
        closeSpeed: 300,
        showNavArrows : true,

    });
    console.log('fancybox');
};
// $("#reviews").attr("color","red");
// };

  function initGoogleMap() {
        
                    var styles = [
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#2c2e33"
            },
            {
                "saturation": 7
            },
            {
                "lightness": 19
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-3"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f39247"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f39247"
            },
            {
                "saturation": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff6f00"
            },
            {
                "saturation": "100"
            },
            {
                "lightness": 31
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f39247"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#008eff"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#f3dbc8"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": -2
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -90
            },
            {
                "lightness": -8
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 69
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -78
            },
            {
                "lightness": 67
            },
            {
                "visibility": "simplified"
            }
        ]
    }
];
                    google.maps.visualRefresh = true;
                    var styledMap = new google.maps.StyledMapType(styles, {
                        name: "Styled Map"
                    });
                    var mapDiv = document.getElementById('map');
        
                    var myOptions = {
                        center: new google.maps.LatLng(43.6272808,-79.6355173),
                        zoom: 13,
                        panControl: false,
                        mapTypeControl: false,
                        draggable: true,
                        scrollwheel: true,
                        navigationControl: false,
                        streetViewControl: false,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
        
                    map = new google.maps.Map(mapDiv, myOptions);
                    map.mapTypes.set('map_style', styledMap);
                    map.setMapTypeId('map_style');
        
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(43.6272808,-79.6355173),
                        map: map,
                        icon: 'https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/64/Map-Marker-Marker-Outside-Azure.png',
                        title: "TorontoGranite.com 5151 Everest Dr. #1 Mississauga, ON L4W 2Z3"
                    });   
console.log('Google Map');
}
        

    google.maps.event.addDomListener(window, 'load', initialize);



$(document).ready(function () {
        var options = {
        opacity: 0.73
    };
    $('.reflect').reflect(options);
    initFancyBox();
    initGoogleMap();

});














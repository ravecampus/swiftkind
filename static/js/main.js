jQuery(document).ready(function( $ ) {
    $('.number').counterUp({
        delay: 1,
        time: 1000
    });

    //nav-bar

      $(".mobile-nav ul li.trigger-collapse a").click(function(event) {
          $(".mobile-nav").collapse('hide');
        });

    //tooltipster
    $('.tooltip').tooltipster({
        content: $('<span> This text is in bold case !</span>'),
        position:'right'
    });


    //
    new WOW().init();
     $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        autoHeight:false,
        singleItem:true,
      });

         $(".hover").mouseleave(
        function() {
            $(this).removeClass("hover");
        }

    );


//set your google maps parameters
    var $latitude = 7.088303,
        $longitude = 125.616174,
        $map_zoom = 17;

    //google map custom marker icon - .png fallback for IE11
    var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
    var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
        
    //define the basic color of your map, plus a value for saturation and brightness
    var $main_color = '#fff',
        $saturation= -78,
        $brightness= 67;

    //we define here the style of the map
    var style= [ 
        {
            //set saturation for the labels on the map
            elementType: "labels",
            stylers: [
                {saturation: $saturation}
            ]
        },  
        {   //poi stands for point of interest - don't show these lables on the map 
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        },
        {
            //don't show highways lables on the map
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
                {visibility: "off"}
            ]
        }, 
        {   
            //don't show local road lables on the map
            featureType: "road.local", 
            elementType: "labels.icon", 
            stylers: [
                {visibility: "off"} 
            ] 
        },
        { 
            //don't show arterial road lables on the map
            featureType: "road.arterial", 
            elementType: "labels.icon", 
            stylers: [
                {visibility: "off"}
            ] 
        },
        {
            //don't show road lables on the map
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
                {visibility: "off"}
            ]
        }, 
        //style different elements on the map
        { 
            featureType: "transit", 
            elementType: "geometry.fill", 
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }, 
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.government",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.sport_complex",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.attraction",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "poi.business",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "transit",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "transit.station",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "landscape",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
            
        },
        {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        },
        {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }, 
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: $main_color },
                { visibility: "on" }, 
                { lightness: $brightness }, 
                { saturation: $saturation }
            ]
        }
    ];
        
    //set google map options
    var map_options = {
        center: new google.maps.LatLng($latitude, $longitude),
        zoom: $map_zoom,
        panControl: false,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: style,
    }
    //inizialize the map
    var map = new google.maps.Map(document.getElementById('google-container'), map_options);
    //add a custom marker to the map                
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng($latitude, $longitude),
        map: map,
        visible: true,
        icon: $marker_url,
    });

    //add custom buttons for the zoom-in/zoom-out on the map
    function CustomZoomControl(controlDiv, map) {
        //grap the zoom elements from the DOM and insert them in the map 
        var controlUIzoomIn= document.getElementById('cd-zoom-in'),
            controlUIzoomOut= document.getElementById('cd-zoom-out');
        controlDiv.appendChild(controlUIzoomIn);
        controlDiv.appendChild(controlUIzoomOut);

        // Setup the click event listeners and zoom-in or out according to the clicked element
        google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
            map.setZoom(map.getZoom()+1)
        });
        google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
            map.setZoom(map.getZoom()-1)
        });
    }

    var zoomControlDiv = document.createElement('div');
    var zoomControl = new CustomZoomControl(zoomControlDiv, map);

    //insert the zoom div on the top left of the map
    map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);

    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });

});

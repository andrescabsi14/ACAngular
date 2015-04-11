$(document).ready(function(){

	heightTopPosition('#home', '.container');
	triggerModals();
	customMap();
	wowAnimations();
	mobileMenu();
	// parallaxJS();
	backgroundCover( "#portfolioCarousel > .item .img" );
	$(window).resize(function(){
		heightTopPosition('#home', '.container');
	});
});

function heightTopPosition(selector, container){
	var $currentHeight = $(selector).height();
	$(container).attr('style', 'padding-top: ' + $currentHeight + 'px;');

}

function triggerModals(){
	//Modal 01
	$("#modal01").animatedModal({
	    modalTarget:'modal-01',
	    animatedIn:'lightSpeedIn',
	    animatedOut:'bounceOutDown',
	});
	//Modal 02
	$("#modal02").animatedModal({
	    modalTarget:'modal-02',
	    animatedIn:'lightSpeedIn',
	    animatedOut:'bounceOutDown',
	});
	//Modal 03
	$("#modal03").animatedModal({
	    modalTarget:'modal-03',
	    animatedIn:'lightSpeedIn',
	    animatedOut:'bounceOutDown',
	});
	//Modal 04
	$("#modal04").animatedModal({
	    modalTarget:'modal-04',
	    animatedIn:'lightSpeedIn',
	    animatedOut:'bounceOutDown',
	});
}

function customMap(){
	// When the window has finished loading create our google map below
	google.maps.event.addDomListener(window, 'load', init);
	
	function init() {
	    // Basic options for a simple Google Map
	    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	    var mapOptions = {
	        // How zoomed in you want the map to start at (always required)
	        zoom: 15,
	        zoomControl: false,
	        streetViewControl: false,
	        scrollwheel: false,
	        pancontrol: false,
	        overviewMapControl: false,

	        // The latitude and longitude to center the map (always required)
	        // center: new google.maps.LatLng(40.6700, -73.9400), // New York
	        center: new google.maps.LatLng(4.749191, -74.097047), // New York

	        // How you would like to style the map. 
	        // This is where you would paste any style found on Snazzy Maps.
	        styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#000000"},{"lightness":13}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#144b53"},{"lightness":14},{"weight":1.4}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#08304b"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#0c4152"},{"lightness":5}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#0b434f"},{"lightness":25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#0b3d51"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"transit","elementType":"all","stylers":[{"color":"#146474"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#021019"}]}]
	    };

	    // Get the HTML DOM element that will contain your map 
	    // We are using a div with id="map" seen below in the <body>
	    var mapElement = document.getElementById('map');

	    // Create the Google Map using our element and options defined above
	    var map = new google.maps.Map(mapElement, mapOptions);

	    // Let's also add a marker while we're at it
	    var marker = new google.maps.Marker({
	        position: new google.maps.LatLng(4.749191, -74.097047),
	        map: map,
	        title: 'Snazzy!'
	    });
	}
}

function wowAnimations(){
	var wow = new WOW(
	  {
	    boxClass:     'wow',      // animated element css class (default is wow)
	    animateClass: 'animated', // animation css class (default is animated)
	    offset:       0,          // distance to the element when triggering the animation (default is 0)
	    mobile:       true,       // trigger animations on mobile devices (default is true)
	    live:         true,       // act on asynchronously loaded content (default is true)
	    callback:     function(box) {
	      // the callback is fired every time an animation is started
	      // the argument that is passed in is the DOM node being animated
	    }
	  }
	);
	wow.init();
}

function mobileMenu(){
	$('#mobileMenutrigger').click(function(){
		$('#mobileMenu').delay(50).queue( function(next){
			$('#coverD').attr('style', 'background: rgba(0,0,0,0.90);position: fixed;width: 100%;height: 100%;top: 0;');
			$('#mobileMenutrigger').attr('style', 'opacity: 0;');
			$(this).attr('style', 'width: 100%; height: 3px; padding: 0;'); 
			next();
		}).delay(500).queue( function(next){ 
			$(this).attr('style', 'height: 400px; top: 28%;'); 
			next();
		}).delay(700).queue( function(next){ 
			$('#mobileMenutriggerClose').addClass('active');
			$('.instructions').attr('style', 'opacity: 1;');
			$('#mobileMenutriggerClose').attr('style', 'opacity: 1;'); 
			next();
		});

		// $(this).toggleClass('active');
		$('#mobileMenu').delay(900).addClass('active');
	});

	$('#mobileMenutriggerClose').click(function(){
		$('#mobileMenu').delay(50).queue( function(next){
			$('#mobileMenutrigger').attr(' ');
			$(this).attr('style', ' '); 
			next();
		}).delay(70).queue( function(next){ 
			$(this).attr('style', ' '); 
			next();
		}).delay(90).queue( function(next){ 
			$('#mobileMenutriggerClose').removeClass('active');
			$('#mobileMenutriggerClose').attr(' ');
			$('#mobileMenutrigger').removeClass('active');
			$('#mobileMenutrigger').attr('style', 'opacity: 1;');
			$('#coverD').attr('style', ' ');
			$('.instructions').attr('style', ' ');
			next();
		});

		// $(this).toggleClass('active');
		$('#mobileMenu').delay(900).removeClass('active');
	});


}

function parallaxJS(){
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
}


// BACKGROUND COVER
////////////////////////////////////////////////////////////
function backgroundCover( selector ){
	var windowWidth = $(window).width();
	$(selector).each(function(){
		var imgData = $(this).find('span').data('img');
		$(this).find('span').attr('style', 'background: url('+ imgData + ')50% 50% / cover');
	});
}




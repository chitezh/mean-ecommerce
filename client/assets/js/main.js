(function ($) {
 "use strict";
       
    // Search Button 
    // Handle click on toggle search button
    $('#toggle-search').on('click', function() {
        $('.search').toggleClass('open');
        return false;
    });

    // Handle click on search submit button
    $('#search-form input[type=submit]').on('click', function() {
        $('.search').toggleClass('open');
        return true;
    });
    
    //Shop Grid/List Page Price-slider js
    $( "#slider-range" ).slider({
        range: true,
        min: 690,
        max: 1250,
        values: [ 690, 960 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
           
    //Product Details Page BX Slider
    $('.bxslider').bxSlider({
        minSlides: 4,
        maxSlides: 4,
        slideWidth:270,	 
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        prevText: '<i class="fa fa-angle-left"></i>',
        nextText: '<i class="fa fa-angle-right"></i>'
    });
    
    //ScollUp
    $.scrollUp({
        scrollName: 'scrollUp',
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade',
        animationInSpeed: 2000
    });
    //Elevate Zoom
    $('.zoom_01').elevateZoom({
        easing : true,
        cursor: "crosshair",
        zoomWindowFadeIn: 300,
        zoomWindowFadeOut: 350
    });
    //MeanMenu Js
    jQuery('nav#dropdown').meanmenu();	
    
    //Product Details Page Plus Minus Button
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	    $(".qtybutton").on("click", function() {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
		  var newVal = parseFloat(oldValue) + 1;
		} else {
		   // Don't allow decrementing below zero
		  if (oldValue > 0) {
			var newVal = parseFloat(oldValue) - 1;
			} else {
			newVal = 0;
        }
        }
		$button.parent().find("input").val(newVal);
    });
    
})(jQuery);    
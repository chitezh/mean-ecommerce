(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			 $('#nivoslider').nivoSlider({
				effect: 'random',
				slices: 15,
				boxCols: 12,
				boxRows: 12,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: false,
				manualAdvance: true
			 });
			 
			$('#nivoslider-four').nivoSlider({
				effect: 'fade',
				slices: 15,
				boxCols: 12,
				boxRows: 12,
				animSpeed: 500,
				pauseTime: 5000,
				startSlide: 0,
				directionNav: false,
				controlNavThumbs: false,
				pauseOnHover: true,
				manualAdvance: true
			 });
})(jQuery); 
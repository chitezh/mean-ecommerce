'use strict';

angular.module('bhcmartApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
  }).directive('slideit', function() {
    return {
      link: function(scope, element, attrs) {
        $(element).nivoSlider({
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
      }
    }
  }).directive('newArrivalCarousel', function() {
    return {
      link: function(scope, element, attrs) {
        //New Arrival Carousel Area
        $(element).owlCarousel({
          autoPlay: false,
          slideSpeed: 2000,
          items: 5,
          pagination: false,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          itemsDesktop: [1199, 4],
          itemsDesktopSmall: [979, 3],
          itemsTablet: [768, 2],
          itemsMobile: [479, 1]
        });
      }
    }
  })
  .directive('singlePSlide', function() {
    return {
      link: function(scope, element, attrs) {
        //Features Tab Carousel
        $(element).owlCarousel({
          autoPlay: false,
          slideSpeed: 2000,
          items: 4,
          pagination: false,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [979, 2],
          itemsLargeMobile: [767, 2],
          itemsMobile: [450, 1]
        });
      }
    }
  })
  .directive('singlePSlideBottom', function() {
    return {
      link: function(scope, element, attrs) {
        //Features Tab Bottom Carousel
        $(element).owlCarousel({
          autoPlay: false,
          slideSpeed: 2000,
          items: 4,
          pagination: false,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          itemsDesktop: [1199, 3],
          itemsDesktopSmall: [979, 3],
          itemsLargeMobile: [767, 2],
          itemsMobile: [450, 1]
        });
      }
    }
  })
  .directive('brandWrapper', function() {
    return {
      link: function(scope, element, attrs) {
        // Brand Carousel
        $(element).owlCarousel({
          autoPlay: false,
          slideSpeed: 2000,
          items: 5,
          pagination: false,
          navigation: false,
          itemsDesktop: [1199, 4],
          itemsDesktopSmall: [979, 3],
          itemsLargeMobile: [767, 2],
          itemsMobile: [450, 1]
        });
      }
    }
  })
  .directive('singlePSlideFive', function() {
    return {
      link: function(scope, element, attrs) {
        //Home five Hot Tab
        $(element).owlCarousel({
          autoPlay: false,
          slideSpeed: 2000,
          items: 5,
          pagination: false,
          navigation: true,
          navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
          itemsDesktop: [1199, 4],
          itemsDesktopSmall: [979, 3],
          itemsLargeMobile: [767, 1],
          itemsMobile: [450, 1]
        });
      }
    }
  })
  .directive('countdowner', function() {
    return {
      link: function(scope, element, attrs) {
        //Countdown
        $(element).each(function() {
          var $this = $(this),
            finalDate = $(this).data('countdown');
          $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<h4 class="cdown days"><span class="counting">%-D</span></h4><h4 class="cdown hours"><span class="counting">%-H</span></h4><h4 class="cdown minutes"><span class="counting">%M</span></h4><h4 class="cdown seconds"><span><span class="counting">%S</span></h4>'));
          });
        });
      }
    }
  });

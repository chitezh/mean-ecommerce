'use strict';

angular.module('bhcmartApp')
  .directive('sidebarCat', function() {
    return {
      templateUrl: 'components/sidebar-cat/sidebar-cat.html',
      restrict: 'E',
      controller: 'SidebarCatCtrl',
      link: function(scope, element, attrs) {}
    };
  });

'use strict';

angular.module('bhcmartApp')
  .controller('CategoryCtrl', ['$scope', '$stateParams', 'Product', function($scope, $stateParams, Product) {
    console.log($stateParams)
    $stateParams.slug == 'all' ? Product.query(process($scope)) : Product.catalog({ id: $stateParams.slug, limit: 0 }, process($scope));
  }]);

let getAverageRating = p => Math.ceil(_.reduce(p.reviews, (a, b) => a + b.rating, 0) / p.reviews.length);

let process = $scope => prod => {
  $scope.products = _.map(prod, rP => _.extend(rP, { averageRating: getAverageRating(rP) }));
  // pagination controls
  $scope.currentPage = 1;
  $scope.totalItems = $scope.products.length;
  $scope.itemsPerPage = 20; // items per page
  $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
}

'use strict';

angular.module('bhcmartApp')
  .controller('ManageCategoriesCtrl', ['$scope', 'Catalog', 'Modal',
    function($scope, Catalog, Modal) {
      Catalog.query(function(categories) {
        $scope.categories = categories;
        // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.categories.length;
        $scope.itemsPerPage = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
      });

      $scope.deleteCatalog = Modal.confirm.delete(function(c) {
        if (c.slug == 'all') return;
        c.$remove(c._id, function(resp) {
          console.log(resp)
          $scope.categories.splice($scope.categories.indexOf(c), 1);
        })
      });
    }
  ])

.controller('ManageCategoriesEditCtrl', ['$scope', '$state', 'Catalog', '$stateParams',
  function($scope, $state, Catalog, $stateParams) {

    Catalog.query(function(categories) {
      $scope.categories = categories;
      $scope.category = Catalog.get({ id: $stateParams.id });
    });

    $scope.save = function(form) {
      if (form.$valid) {
        if (c.slug == 'all') return;
        Catalog.update({ id: $scope.category._id }, $scope.category, function(resp) {
          console.log('updated', resp);
          $state.go('manage-categories');
        }, function(err) {
          console.log(err);
        });
      }
    }
  }
])

.controller('ManageCategoriesAddCtrl', ['$scope', '$state', 'Catalog', '$stateParams',
  function($scope, $state, Catalog, $stateParams) {

    Catalog.query(function(categories) {
      $scope.categories = categories;
    });

    $scope.save = function(form) {
      if (form.$valid) {
        console.log($scope.category)
        Catalog.save($scope.category, function(resp) {
          console.log('created', resp);
          $state.go('manage-categories');
        }, function(err) {
          console.log(err);
          $scope.message == err;
        });
      }
    }
  }
]);

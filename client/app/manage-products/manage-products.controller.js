'use strict';

angular.module('bhcmartApp')
  .controller('ManageProductsCtrl', ['$scope', 'Product', 'Modal',
    function($scope, Product, Modal) {
      Product.query(function(products) {
        $scope.products = products;
        // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.products.length;
        $scope.itemsPerPage = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
      });

      $scope.deleteProduct = Modal.confirm.delete(function(p) {
        if (p.slug == 'all') return;
        p.$remove(p._id, function(resp) {
          console.log(resp)
          $scope.products.splice($scope.products.indexOf(p), 1);
        })
      });
    }
  ])
  .controller('ManageProductsEditCtrl', ['$scope', '$stateParams', '$state', 'Upload', 'categories', 'product', 'Product',
    function($scope, $stateParams, $state, Upload, categories, product, Product) {

      $scope.categories = categories;
      $scope.product = product;
      // upload on file select or drop
      $scope.upload = function(file) {
        if ($scope.form.imageUrl.$valid && file) {
          Upload.upload({
            url: '/api/uploads',
            data: { file: file }
          }).then(function(resp) {
            if ($scope.product) {
              $scope.product.imageUrl = resp.data.url;
            } else {
              $scope.product = { imageUrl: resp.data.imageUrl }
            }
            console.log(resp.data);
          }, function(resp) {
            $scope.errorMsg = resp.status + ': ' + resp.data;
          }, function(evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
        };
      }

      $scope.save = function(form) {
        if (form.$valid) {
          Product.update($scope.product._id, $scope.product, function(resp) {
            console.log(resp);
            $state.go('manage-products');
          }, function(err) {
            console.log(err)
          })
        }
      }
    }
  ])
  .controller('ManageProductsAddCtrl', ['$scope', '$state', 'Product', 'categories', 'Upload',
    function($scope, $state, Product, categories, Upload) {
      $scope.categories = categories;

      // upload on file select or drop
      $scope.upload = function(file) {
        if ($scope.form.imageUrl.$valid && file) {
          Upload.upload({
            url: '/api/uploads',
            data: { file: file }
          }).then(function(resp) {
            if ($scope.product) {
              $scope.product.imageUrl = resp.data.url;
            } else {
              $scope.product = { imageUrl: resp.data.imageUrl }
            }
            console.log(resp.data);
          }, function(resp) {
            $scope.errorMsg = resp.status + ': ' + resp.data;
          }, function(evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
          });
        };
      }

      $scope.save = function(form) {
        if (form.$valid) {
          Product.save($scope.product, function(resp) {
            console.log(resp);
            $state.go('manage-products');
          }, function(err) {
            console.log(err)
          })
        }
      }
    }
  ]);

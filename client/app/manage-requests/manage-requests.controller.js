'use strict';

angular.module('bhcmartApp')
  .controller('ManageRequestsCtrl', ['$scope', 'Modal', 'Request', 'Auth', function($scope, Modal, Request, Auth) {
    let user = Auth.getCurrentUser();
    $scope.isAdmin = Auth.hasRole('admin');
    $scope.requests = [];

    if ($scope.isAdmin)
      Request.query(function(requests) {
        $scope.requests = requests
          // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.requests.length;
        $scope.itemsPerPage = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
      });
    else
      Request.myRequests({ id: user._id }, function(requests) {
        $scope.requests = requests
          // pagination controls
        $scope.currentPage = 1;
        $scope.totalItems = $scope.requests.length;
        $scope.itemsPerPage = 10; // items per page
        $scope.noOfPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);
      });

    $scope.deleteRequest = Modal.confirm.delete(function(o) {
      o.$remove(o._id, function(resp) {
        console.log(resp)
        $scope.requests.splice($scope.requests.indexOf(o), 1);
      })
    });

    $scope.deliverRequest = Modal.confirm.process(function(o) {
      o.processed = o.processed ? false : true;
      o.$update(function(resp) {
        console.log(resp)
      })
    });
  }])
  .controller('SubmitRequestCtrl', ['$scope', 'Modal', 'Request', 'Auth', '$state',
    function($scope, Modal, Request, Auth, $state) {

      $scope.items = [], $scope.listSubTotal = 0, $scope.listCharge = 0, $scope.listTotal = 0;

      $scope.user = Auth.getCurrentUser() || {};
      $scope.isLoggedIn = Auth.isLoggedIn();
      $scope.errors = {};
      $scope.submitted = false;

      $scope.login = (form) => {
        $scope.submitted = true;

        if (form.$valid) {
          Auth.login({
              email: $scope.user.email,
              password: $scope.user.password
            })
            .then(() => {
              $state.reload();
            })
            .catch(err => {
              $scope.errors.other = err.message;
            });
        }
      }

      $scope.validate = form => {
        $scope.submitted = true;
        if (form.$valid) {
          $scope.message = '';
          $scope.success = 'Form is valid. Continue with the section below';
        }
      }


      $scope.addToList = function(newItem) {
        $scope.message = null;
        if (_.size(newItem) < 3) {
          $scope.message = 'Please, fill the empty fields';
          return;
        }
        newItem.total = newItem.price * newItem.quantity;
        $scope.items.push(newItem);

        $scope.listSubTotal = _.reduce($scope.items, (a, b) => a + b.total, 0);
        $scope.listCharge = 0.10 * $scope.listSubTotal;
        $scope.listTotal = $scope.listSubTotal + $scope.listCharge;
        $scope.newItem = {};
      }



      $scope.removeFromList = function(index) {
        $scope.items.splice(index, 1);
      }

      $scope.submitList = (items, user) => {
        if (user.name && user.email && user.phone && user.address && user.city && user.country) {
          let list = {};
          list.items = items;
          
          list.listSubTotal = $scope.listSubTotal;
          list.listCharge = $scope.listCharge;
          list.listTotal = $scope.listTotal;

          list = _.extend(list, {
            customerId: user._id ? user._id : '',
            customerName: user.name,
            customerEmail: user.email,
            customerAddress: user.address,
            customerPhone: user.phone,
            customerCity: user.city,
            customerState: user.state ? user.state : '',
            customerCountry: user.country
          });

          console.log(list)

          Request.save(list,
            function(resp) {
              console.log(resp)
              $state.go('view-request', { id: resp._id });
            },
            function(err) {
              console.log(err)
            });
        } else {
          $scope.message = 'Please, complete the shipping section and click on validate'
        }
      }
    }
  ]).controller('ViewRequestCtrl', ['$scope', 'Request', '$stateParams', function($scope, Request, $stateParams) {
    $scope.request = Request.get({ id: $stateParams.id });
  }]);;

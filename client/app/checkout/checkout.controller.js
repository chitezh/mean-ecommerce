'use strict';

angular.module('bhcmartApp')
  .controller('CheckoutCtrl', ['$scope', 'Auth', '$state', 'Order', 'ngCart', function($scope, Auth, $state, Order, ngCart) {

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
      if (form.$valid) $scope.message = '';
    }


    $scope.checkout = (cart, user) => {
      if (user.name && user.email && user.phone && user.address && user.city && user.country) {
        _.map(cart.items, i => {
          i.productId = i.id;
          delete i.data;
          delete i.id;
          return i;
        })

        cart = _.extend(cart, {
          customerId: user._id ? user._id : '',
          customerName: user.name,
          customerEmail: user.email,
          customerAddress: user.address,
          customerPhone: user.phone,
          customerCity: user.city,
          customerState: user.state ? user.state : '',
          customerCountry: user.country
        });

        Order.save(cart,
          function(resp) {
            ngCart.empty();
            $state.go('invoice', {id: resp._id});
          },
          function(err) {
            console.log(err)
          });
      } else {
        $scope.message = 'Please, complete the shipping section and click on validate'
      }
    }
  }]);

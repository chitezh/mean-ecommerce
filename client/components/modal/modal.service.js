'use strict';

angular.module('bhcmartApp')
  .factory('Modal', function($rootScope, $uibModal) {
    /**
     * Opens a modal
     * @param  {Object} scope      - an object to be merged with modal's scope
     * @param  {String} modalClass - (optional) class(es) to be applied to the modal
     * @return {Object}            - the instance $uibModal.open() returns
     */
    function openModal(scope = {}, modalClass = 'modal-default') {
      var modalScope = $rootScope.$new();

      angular.extend(modalScope, scope);

      return $uibModal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: modalClass,
        scope: modalScope
      });
    }

    // Public API here
    return {

      /* Confirmation modals */
      confirm: {

        /**
         * Create a function to open a delete confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when delete is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        delete(del = angular.noop) {
          /**
           * Open a delete confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-danger',
                  text: 'Delete',
                  click: function(e) {
                    deleteModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deleteModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-danger');

            deleteModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        },
        /**
         * Create a function to open a deliver confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when deliver is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        deliver(del = angular.noop) {
          /**
           * Open a deliver confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              deliverModal;

            deliverModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Deliver',
                html: '<p>Are you sure you want to deliver <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-success',
                  text: 'Deliver',
                  click: function(e) {
                    deliverModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deliverModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-success');

            deliverModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        },
        /**
         * Create a function to open a deliver confirmation modal (ex. ng-click='myModalFn(name, arg1, arg2...)')
         * @param  {Function} del - callback, ran when deliver is confirmed
         * @return {Function}     - the function to open the modal (ex. myModalFn)
         */
        process(del = angular.noop) {
          /**
           * Open a deliver confirmation modal
           * @param  {String} name   - name or info to show on modal
           * @param  {All}           - any additional args are passed straight to del callback
           */
          return function() {
            var args = Array.prototype.slice.call(arguments),
              name = args.shift(),
              deliverModal;

            deliverModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Processing',
                html: '<p>Are you sure you want to process <strong>' + name + '</strong> ?</p>',
                buttons: [{
                  classes: 'btn-success',
                  text: 'Process',
                  click: function(e) {
                    deliverModal.close(e);
                  }
                }, {
                  classes: 'btn-default',
                  text: 'Cancel',
                  click: function(e) {
                    deliverModal.dismiss(e);
                  }
                }]
              }
            }, 'modal-success');

            deliverModal.result.then(function(event) {
              del.apply(event, args);
            });
          };
        }
      }
    };
  });

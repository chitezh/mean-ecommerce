'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Catalog) {
      this.$http = $http;
      this.awesomeThings = [];
      let self = this;

      Catalog.query(function(categories) {
        self.categories = categories;
        self.allCategory = _.filter(categories, function(category) {
          return category.ancestors.length == 0;
        })
        let parentCategories = _.filter(categories, function(category) {
          return category.ancestors.length == 1;
        })
        self.parentCategories = _.map(parentCategories, function(parentCategory) {
          parentCategory.children = _.map(parentCategory.children, function(childId) {
            if (childId)
              return _.find(categories, {
                "_id": childId
              })
          })
          return parentCategory
        });
        socket.syncUpdates('catalog', self.categories);
      });


      $http.get('/api/things').then(response => {
        this.awesomeThings = response.data;
        socket.syncUpdates('thing', this.awesomeThings);
      });

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
        socket.unsyncUpdates('catalog');
      });
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('bhcmartApp')
    .controller('MainController', MainController);

})();

'use strict';

(function() {

  class AdminController {
    constructor(User, Modal) {
      // Use the User $resource to fetch all users
      let self = this;
      User.query(function(users) {
        self.users = users;
        // pagination controls
        self.currentPage = 1;
        self.totalItems = self.users.length;
        self.itemsPerPage = 10; // items per page
        self.noOfPages = Math.ceil(self.totalItems / self.itemsPerPage);
      });

      this.delete = Modal.confirm.delete(user => {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
      });
    }


  }

  angular.module('bhcmartApp.admin')
    .controller('AdminController', AdminController);

})();

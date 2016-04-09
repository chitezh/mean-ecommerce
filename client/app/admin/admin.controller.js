'use strict';

(function() {

  class AdminController {
    constructor(User, Modal) {
      // Use the User $resource to fetch all users
      this.users = User.query();

      this.delete = Modal.confirm.delete(user => {
        user.$remove();
        this.users.splice(this.users.indexOf(user), 1);
      });
    }


  }

  angular.module('bhcmartApp.admin')
    .controller('AdminController', AdminController);

})();

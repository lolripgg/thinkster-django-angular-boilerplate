(function () {
  'use strict';
  
  angular
    .module('thinkster.authentication.controllers')
    .controller('RegisterController', RegisterController);
    
  RegisterController.$inject = ['$location', '$scope', 'Authentication'];
  
  function RegisterController($location, $scope, Authentication) {
    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf thinkster.authentication.controllers.RegisterController
     */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    var vm = this;
    
    vm.register = register;
    
    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf thinkster.authentication.controllers.RegisterController
     */
    function activate() {
      // If the user is authenticated, they should not be here.
      if (Authentication.isAuthenticated()) {
        $location.url('/');
      }
    }

    function register() {
      Authentication.register(vm.email, vm.password, vm.username);
    }   
  }
})();
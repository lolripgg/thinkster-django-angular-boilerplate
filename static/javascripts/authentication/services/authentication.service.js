(function () {
  'use strict';

  angular.module('thinkster.authentication.services').factory('Authentication', Authentication);
  Authentication.$inject = ['$cookies', '$http'];

  function Authentication($cookies, $http) {

    var Authentication = {
      login: login,
      getAuthenticatedAccount: getAuthenticatedAccount,
      isAuthenticated: isAuthenticated,
      setAuthenticatedAccount: setAuthenticatedAccount,
      unauthenticate: unauthenticate,
      register: register,
    };

    return Authentication;

    function register(email, password, username) {
      return $http.post('/api/v1/accounts/', {
        username: username,
        password: password,
        email: email
      });
    }

    function login(email, password) {
      return $http.post('/api/v1/auth/login/', {
        email: email, password: password
      });
    }

    function getAuthenticatedAccount() {
      if (!$cookies.authenticatedAccount) {
        return;
      }

      return JSON.parse($cookies.authenticatedAccount);
    }

    function isAuthenticated() {
      return !!$cookies.authenticatedAccount;
    }

    function setAuthenticatedAccount(account) {
      $cookies.authenticatedAccount = JSON.stringify(account);
    }

    function unauthenticate() {
      delete $cookies.authenticatedAccount;
    }
  }
})();
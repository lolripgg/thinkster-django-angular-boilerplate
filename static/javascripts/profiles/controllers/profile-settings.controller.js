(function () {
  'use strict';

  angular.module('thinkster.profiles.controllers').controller('ProfileSettingsController', ProfileSettingsController);

  ProfileSettingsController.$inject = [
    '$location', '$routeParams', 'Authentication', 'Profile', 'Snackbar'
  ];

  function ProfileSettingsController($location, $routeParams, Authentication, Profile, Snackbar) {
    var vm = this;

    vm.destroy = destroy;
    vm.update = update;

    activate();

    function activate() {
      var authenticatedAccount = Authentication.getAuthenticatedAccount();
      var username = $routeParams.username.substr(1);

      // Redirect if not logged in
      if (!authenticatedAccount) {
        $location.url('/');
        Snackbar.error('You are not authorized to view this page.');
      } else {
        // Redirect if logged in, but not the owner of this profile.
        if (authenticatedAccount.username !== username) {
          $location.url('/');
          Snackbar.error('You are not authorized to view this page.');
        }
      }

      Profile.get(username).then(profileSuccessFn, profileErrorFn);

      function profileSuccessFn(data, status, headers, config) {
        vm.profile = data.data;
      }

      function profileErrorFn(data, status, headers, config) {
        $location.url('/');
        Snackbar.error('That user does not exist.');
      }
    }

    function destroy() {
      Profile.destroy(vm.profile.username).then(profileSuccessFn, profileErrorFn);

      function profileSuccessFn(data, status, headers, config) {
        Authentication.unauthenticate();
        window.location = '/';

        Snackbar.show('Your account has been deleted.');
      }

      function profileErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }

    function update() {
      Profile.update(vm.profile).then(profileSuccessFn, profileErrorFn);

      function profileSuccessFn(data, status, headers, config) {
        Snackbar.show('Your profile has been updated.');
      }

      function profileErrorFn(data, status, headers, config) {
        Snackbar.error(data.error);
      }
    }
  }
})();
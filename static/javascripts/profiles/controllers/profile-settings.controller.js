/**
 * Created by Chris on 2015/04/28.
 *
 * ProfileSettingsController
 * @namespace thinkster.profiles.controllers
 */
(function() {
    'use strict';

    angular
        .module('thinkster.profiles.controllers')
        .controller('ProfileSettingsController', ProfileSettingsController);

    ProfileSettingsController.$inject = [
        '$location', '$routeParams', 'Authentication', 'Profile', 'Snackbar'
    ];

    /**
     * @namespace ProfileSettingsController
     */
    function ProfileSettingsController($location, $routeParams, Authentication, Profile, Snackbar) {
        var vm = this;

        vm.destroy = destroy;
        vm.update = update;

        activate();

        /**
         * @name activate
         * @desc Actions to be performed when this controller is instantiated
         * @memberOf thinkster.profiles.controllers.ProfileSettingsController
         */
        function activate() {
            var authenticatedAccount = Authentication.getAuthenticatedAccount();
            var username = $routeParams.username.substr(1);

            // Redirect if not logged in
            if (!authenticatedAccount) {
                $location.url('/');
                Snackbar.error('You are not authorized to view this page.');
            } else {
                // Redirect if logged in, but not the owner of this profile
                if (authenticatedAccount.username !== username) {
                    $location.url('/');
                    Snackbar.error('You are not authorized to view this page.')
                }
            }

            Profile.get(username).then(profileSuccessFn, profileErrorFn);

            /**
             * @name profileSuccessFn
             * @desc Update `profile` for view
             */
            function profileSuccessFn(data, status, headers, config) {
                vm.profile = data.data;
            }

            /**
             * @name profileErrorFn
             * @desc Redirect to index
             */
            function profileErrorFn(data, status, headers, config) {
                $location.url('/');
                Snackbar.error('That user does not exist.');
            }
        }

        /**
         * @name destroy
         * @desc Destroy this user's profile
         * @memberOf thinkster.profiles.controllers.ProfileSettingsController
         */
        function destroy() {
            Profile.destroy(vm.profile.username).then(profileSuccessFn, profileErrorFn);

            /**
             * @name profileSuccessFn
             * @desc Redirect to index and display success Snackbar
             */
            function profileSuccessFn(data, status, headers, config) {
                Authentication.unauthenticate();
                window.location = '/';

                Snackbar.show('Your account has been deleted.');
            }

            /**
             * @name profileErrorFn
             * @desc Display error snackbar
             */
            function profileErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }

        /**
         * @name update
         * @desc Update this user's profile
         * @memberOf thinkster.profiles.controllers.ProfileSettingsController
         */
        function update() {
            Profile.update(vm.profile).then(profileSuccessFn, profileErrorFn);

            /**
             * @name profileSuccessFn
             * @desc Show success snackbar
             */
            function profileSuccessFn(data, status, headers, config) {
                Snackbar.show('Your profile has been updated.');
            }

            /**
             * @name profileErrorFn
             * @desc Show error snackbar
             */
            function profileErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }
    }
})();

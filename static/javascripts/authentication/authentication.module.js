/**
 * Created by Chris on 2015/04/28.
 */
(function () {
    'use strict';

    angular
        .module('thinkster.authentication', [
            'thinkster.authentication.controllers',
            'thinkster.authentication.service'
        ]);

    angular
        .module('thinkster.authentication.controllers', []);

    angular
        .module('thinkster.authentication.services', ['ngCookies']);
})();
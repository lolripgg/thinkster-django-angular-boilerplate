(function () {
  'use strict';

  angular.module('thinkster', [
    'thinkster.config',
    'thinkster.routes',
    'thinkster.authentication'
  ]);

  angular.module('thinkster.routes', ['ngRoute']);
})();
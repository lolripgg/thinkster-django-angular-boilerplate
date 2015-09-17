(function () {
  'use strict';

  angular.module('thinkster', [
    'thinkster.routes',
    'thinkster.authentication'
  ]);

  angular.module('thinkster.routes', ['ngRoute']);
})();
(function ($, _) {
  'use strict';

  angular
    .module('thinkster.utils.services')
    .factory('Snackbar', Snackbar);

  function Snackbar() {
    var Snackbar = {
      error: error,
      show: show
    };

    return Snackbar;

    function _snackbar(content, options) {
      options = _.extend({ timeout: 3000 }, options);
      options.content = content;

      $.snackbar(options);
    }

    function error(content, options) {
      _snackbar('Error: ' + content, options);
    }

    function show(content, options) {
      _snackbar(content, options);
    }
  }
})($, _);
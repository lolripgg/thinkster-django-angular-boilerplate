/**
 * Created by Chris on 2015/04/28.
 *
 * Snackbar
 * @namespace thinkster.utils.services
 */
(function ($, _) {
    'use strict';

    angular
        .module('thinkster.utils.services')
        .factory('Snackbar', Snackbar);

    /**
     * @namespace Snackbar
     */
    function Snackbar() {
        /**
         * @name Snackbar
         * @desc The factory to be returned
         */
        var Snackbar = {
            error: error,
            show: show
        };

        return Snackbar;

        /**
         * @name _snackbar
         * @desc Display a snackbar
         * @param {string} content The content of the snackbar
         * @param {Object} options Options for displaying the snackbar
         */
        function _snackbar(content, options) {
            options = _.extend({timeout: 3000}, options);
            options.content = content;

            $.snackbar(options);
        }

        /**
         * @name error
         * @desc Display an error snackbar
         * @param {string} content The content of the snackbar
         * @param {Object} options Options for displaying the snackbar
         * @memberOf thinkster.utils.services.Snackbar
         */
        function error(content, options) {
            _snackbar('Error: ' + content, options);
        }

        /**
         * @name show
         * @desc Display a standard snackbar
         * @param {string} content The content of the snackbar
         * @param {Object} options Options for displaying the snackbar
         * @memberOf thinkster.utils.services.Snackbar
         */
        function show(content, options) {
            _snackbar(content, options);
        }
    }
})($, _);
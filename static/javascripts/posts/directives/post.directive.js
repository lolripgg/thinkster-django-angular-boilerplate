/**
 * Created by Chris on 2015/04/28.
 *
 * Post
 * @namespace thinkster.posts.directives
 */
(function() {
    'use strict';

    angular
        .module('thinkster.posts.directives')
        .directive('post', post);

    /**
     * @namespace Post
     */
    function post() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf thinkster.posts.directives.Post
         */
        var directive = {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/templates/posts/post.html'
        };

        return directive;
    }
})();

/**
 * Created by Chris on 2015/04/28.
 *
 * Posts
 * @namespace thinkster.posts.directives
 */
(function () {
    'use strict';

    angular
        .module('thinkster.posts.directives')
        .directive('posts', posts);

    /**
     * @namespace Posts
     */
    function posts() {
        /**
         * @name directive
         * @desc The directive to be returned
         * @memberOf thinkster.posts.directives.Posts
         */
        var directive = {
            controller: 'PostsController',
            controllerAs: 'vm',
            restrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/templates/posts/posts.html'
        };

        return directive;
    }
})();
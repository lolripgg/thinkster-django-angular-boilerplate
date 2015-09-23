(function () {
  'use strict';

  angular.module('thinkster.posts.services').factory('Posts', Posts);

  Posts.$inject = ['$http'];

  function Posts($http) {
    var Posts = {
      all: all,
      create: create,
      get: get
    };

    return Posts;

    function all() {
      return $http.get('/api/v1/posts/');
    }

    function create(content) {
      return $http.post('/api/v1/posts/', {
        content: content
      });
    }

    function get(username) {
      return $http.get('/api/v1/accounts/' + username + '/posts/');
    }
  }
})();
'use strict';

/* Services */

var frshnssServices = angular.module('frshnssServices', ['ngResource']);

frshnssServices.factory('DataService', ['$resource',
  	function($resource){
    	return $resource('data/:fileName.json', {}, {
      		query: {method:'GET', params:{fileName:''}, isArray:true}
    	});
  	}
]);

frshnssServices.factory('UserService', ['$http',
    function($http){
      return {
          getUsers: function(){
              return $http.get('http://localhost:3000/users').then(function(result){
                  return result.data;
              });
          },
          getUserById: function(){
              return $http.get('http://localhost:3000/users/:id').then(function(result){
                  return result.data;
              });
          }
      }
    }
]);

frshnssServices.factory('BlogService', ['$http',
    function($http){
      var baseUrl = "http://localhost:3000/posts";
      return {
          getPosts: function(){
              return $http.get(baseUrl).then(function(result){
                  return result.data;
              });
          },
          getPostById: function(id){
              return $http.get(baseUrl + '/' + id).then(function(result){
                  return result.data;
              });
          },
          addPost: function(newPost){
              return $http.post(baseUrl, newPost);
          },
          deletePost: function(id){
              return $http.delete(baseUrl + '/' + id);
          },
          updatePost: function(post){
              return $http.put(baseUrl + '/' + post._id, post)
          },
          getPostsByQuery: function(skip){
              return $http.get('http://localhost:3000/queryposts/' + skip).then(function(result){
                  return result.data;
              });
          }
      }
    }
]);
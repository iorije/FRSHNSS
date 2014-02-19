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

frshnssServices.factory('WineService', ['$http',
    function($http){
      return {
          getWines: function(){
              return $http.get('http://localhost:3000/wines').then(function(result){
                  return result.data;
              });
          },
          getWineById: function(){
              return $http.get('http://localhost:3000/wines/:id').then(function(result){
                  return result.data;
              });
          }
      }
    }
]);
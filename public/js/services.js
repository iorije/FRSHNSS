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

frshnssServices.factory('WineService', function($http) {
   return {
        getWines: function() {
             //return the promise directly.
             return $http.get('http://localhost:3000/wines')
                       .then(function(result) {
                            //resolve the promise as the data
                            return result;
                        });
        }
   }
});
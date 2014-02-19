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
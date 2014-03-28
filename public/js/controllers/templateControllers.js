'use strict';

/* Controllers */

var templateControllers = angular.module('templateControllers', []);

templateControllers.controller('NavigationCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.links = DataService.query({fileName: 'navigation'});
	}
]);
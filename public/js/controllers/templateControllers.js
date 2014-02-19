'use strict';

/* Controllers */

var templateControllers = angular.module('templateControllers', []);

templateControllers.controller('FooterCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.name = "footer";
		$scope.links = DataService.query({fileName: 'footer'});
		$scope.navigation = DataService.query({fileName: 'navigation'});
	}
]);

templateControllers.controller('NavigationCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.links = DataService.query({fileName: 'navigation'});
	}
]);
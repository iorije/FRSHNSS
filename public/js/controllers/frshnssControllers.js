'use strict';

/* Controllers */

var frshnssControllers = angular.module('frshnssControllers', []);

frshnssControllers.controller('HomeCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.data = DataService.get({fileName: 'home'});
		$scope.title = 'HOME';
	}
]);

frshnssControllers.controller('AboutCtrl', ['$scope', '$http', 'DataService',
	function($scope, $http, DataService){
		$scope.data = DataService.get({fileName: 'about'});
		$scope.save = function() {
			$http.post('data/about.json', $scope.data);
		};
	}
]);
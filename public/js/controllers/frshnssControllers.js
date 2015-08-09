'use strict';

/* Controllers */

var frshnssControllers = angular.module('frshnssControllers', []);

frshnssControllers.controller('HomeCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.name = 'home';
	}
]);

frshnssControllers.controller('AboutCtrl', ['$scope',
	function($scope){}
]);

frshnssControllers.controller('PartnersCtrl', ['$scope', '$http', 'DataService',
	function($scope, $http, DataService){
		$scope.partners = DataService.query({fileName: 'partners'});
		$scope.name = "partners";
	}
]);

frshnssControllers.controller('WtfiiCtrl', ['$scope', '$http', 'ObjectService',
	function($scope, $http, ObjectService){
		$scope.wtfii = ObjectService.query({fileName: 'wtfii'});
		$scope.name = "Who's the Freshest II";
	}
]);

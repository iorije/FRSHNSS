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

frshnssControllers.controller('WineCtrl', ['$scope', 'WineService',
	function($scope, WineService){
		WineService.getWines().then(function(data){
			$scope.wines = data;
			console.log(data);
		});
    }
]);

frshnssControllers.controller('WineDetailCtrl', ['$scope', 'WineService',
	function($scope, WineService){
		WineService.getWineById().then(function(data){
			$scope.wine = data;
			console.log(data);
		});
    }
]);
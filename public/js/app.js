'use strict';

/* App Module */

var frshnss = angular.module('frshnss', [
  'ngRoute',
  'frshnssControllers',
  'templateControllers',
  'frshnssServices',
  'frshnssFilters'
]);

frshnss.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

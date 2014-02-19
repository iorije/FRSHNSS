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
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      }).
      when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'AboutCtrl'
      }).
      when('/wines', {
        templateUrl: 'views/wines/index.html',
        controller: 'WineCtrl'
      }).
      when('/wines/:id', {
        templateUrl: 'views/wines/detail.html',
        controller: 'WineDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
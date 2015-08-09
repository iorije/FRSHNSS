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
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      }).
      when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl'
      }).
      when('/wtfii', {
        templateUrl: 'views/wtfii.html',
        controller: 'WtfiiCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
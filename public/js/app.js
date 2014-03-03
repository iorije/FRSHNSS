'use strict';

/* App Module */

var frshnss = angular.module('frshnss', [
  'ngRoute',
  'frshnssControllers',
  'adminControllers',
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
      when('/adm', {
        templateUrl: 'views/admin/index.html',
        controller: 'AdminCtrl'
      }).
      when('/adm/users', {
        templateUrl: 'views/admin/users/userlist.html',
        controller: 'UserCtrl'
      }).
      when('/adm/blog', {
        templateUrl: 'views/admin/blog/postlist.html',
        controller: 'BlogCtrl'
      }).
      when('/adm/blog/newpost', {
        templateUrl: 'views/admin/blog/newpost.html',
        controller: 'NewPostCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }
]);
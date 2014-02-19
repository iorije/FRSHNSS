'use strict';

/* Directives */
frshnss.directive('ngCalendar', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'partials/calendar.html',
    controller: ['$scope', '$http', '$log', 'DataService', function($scope, $http, $log, DataService) {
      $scope.data = DataService.get({fileName: 'calendar'});

      $scope.now = new Date();
      $scope.week = $scope.now.format('W');
      $scope.range =  new Date().getWeek();
      $scope.myKey = 'AIzaSyAsob09ntB3bXhkmbypqqwJyZVMqY3S8V8';
      $scope.calendarId = 'gbqd45san75gsntao52shcgl30@group.calendar.google.com';
      $scope.fields = 'items(summary,description,htmlLink,location,start/dateTime,end/dateTime,id)';
      $scope.timeMin = $scope.range[0].toISOString();
      $scope.timeMax = $scope.range[1].toISOString();

      $http({
        method: 'GET',
        url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/'+$scope.calendarId+'/events?orderBy=startTime&singleEvents=true&timeMax='+$scope.timeMax+'&timeMin='+$scope.timeMin+'&key='+$scope.myKey+'&fields='+$scope.fields)
      }).
        success(function(data, status){
          $scope.events = data;
          $log.log("GetCalendarStatus = ", status);
        }).
        error(function(data, status){
          $scope.events = data;
          $log.log("GetCalendarStatus = ", status);
        });

      $scope.save = function() {
        $http.post('data/about.json', $scope.data);
      };
    }]
  }
});

frshnss.directive('ngBlog', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'partials/blog.html',
    controller: ['$scope', '$http', 'DataService', function($scope, $http, DataService){
      $scope.data = DataService.get({fileName: 'blogposts'});
      $scope.title = 'BLOG';
      $scope.save = function() {
        $scope.data.posts.push($scope.post);
        $http.post('data/blogposts.json', $scope.data);
      };
    }]
  }
});

frshnss.directive('ngHeader', function(){
  return {
    restrict: 'A',
    scope: false,
    templateUrl: 'partials/header.html',
    controller: ['$scope', '$http', function($scope, $http){
      $scope.header = 'HEADER';
    }]
  }
});
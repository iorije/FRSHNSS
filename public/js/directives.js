'use strict';

/* Directives */
frshnss.directive('ngCalendar', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/partials/calendar.html',
    controller: ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
      $scope.name = "Calendar";
      $scope.trainingdata = DataService.query({fileName: 'trainingdata'});
    }]
  }
});

frshnss.directive('ngEvent', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/partials/event.html',
    controller: ['$scope', '$log', 'ObjectService', function($scope, $log, ObjectService) {
      $scope.name = "next event";
      $scope.event = ObjectService.query({fileName: 'event'});
    }]
  }
});

frshnss.directive('ngWhat', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/partials/what.html',
    controller: ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
      $scope.name = "What is FRESHNESS";
      //$scope.trainingdata = DataService.query({fileName: 'trainingdata'});
    }]
  }
});

frshnss.directive('ngConversation', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/partials/conversation.html',
    controller: ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
      $scope.name = "About";
      $scope.conversation = DataService.query({fileName: 'conversation'});
    }]
  }
});

frshnss.directive('ngStaff', function(){
  return {
    restrict: 'A',
    scope: true,
    templateUrl: 'views/partials/staff.html',
    controller: ['$scope', '$log', 'DataService', function($scope, $log, DataService) {
      $scope.name = "Staff";
      $scope.staff = DataService.query({fileName: 'staff'});
    }]
  }
});

frshnss.directive('ngHeader', function(){
  return {
    restrict: 'A',
    scope: false,
    templateUrl: 'views/partials/header.html',
    controller: ['$scope', '$http', function($scope, $http){
      $scope.header = 'HEADER';
    }]
  }
});

frshnss.directive('ngFooter', function(){
  return {
    restrict: 'A',
    scope: false,
    templateUrl: 'views/partials/footer.html',
    controller: ['$scope', '$http', function($scope, $http){
      $scope.footer = 'FOOTER';
    }]
  }
});
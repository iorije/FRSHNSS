'use strict'

describe('HomeCtrl', function(){
    var scope, $httpBackend;
    beforeEach(angular.mock.module('frshnss'));
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	scope = $rootScope.$new();
    	$controller('HomeCtrl', {$scope: scope});
    }));

    //start tests
    it('title should be "Home"', function(){
    	expect(scope.title).toBe('HOME');
    });
 });
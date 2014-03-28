'use strict';

/* Controllers */

var adminControllers = angular.module('adminControllers', []);

adminControllers.controller('AdminNavigationCtrl', ['$scope', 'DataService',
	function($scope, DataService){
		$scope.links = DataService.query({fileName: 'adminnavigation'});
	}
]);

adminControllers.controller('AdminCtrl', ['$scope',
	function($scope){
		$scope.title = 'ADMIN';
	}
]);

adminControllers.controller('BlogCtrl', ['$scope', 'BlogService',
	function($scope, BlogService){
		console.log('Getting Posts');
		BlogService.getPosts().then(function(data){
			$scope.postCollection = data;
			console.log(data);
		});

		$scope.deletePost = function(idx, id){
			BlogService.deletePost(id).success(function() {
    			$scope.postCollection.splice(idx, 1);
  			});
		};

      	$scope.isVisibleJson = false;
      	$scope.isVisibleClass = "invisible";
      	$scope.toggleJson = function(){
      		if ($scope.isVisibleJson == true){
      			$scope.isVisibleJson = false;
      			$scope.isVisibleClass = "invisible";
      		}else{
      			$scope.isVisibleJson = true;
      			$scope.isVisibleClass = "visible";
      		}
      	};
    }
]);

adminControllers.controller('EditPostCtrl', ['$scope', '$location', 'BlogService',
	function($scope, $location, BlogService){
		$scope.title = "Edit post";
      	$scope.id = $location.search()['id'];
      	BlogService.getPostById($scope.id).then(function(data){
      		$scope.post = data;
      	});

      	$scope.updatePost = function(post){
      		post.lastEdited = new Date();
      		BlogService.updatePost(post);
       	};
     }
]);

adminControllers.controller('NewPostCtrl', ['$scope', 'BlogService',
	function($scope, BlogService){
		$scope.title = "Add new Post";
        $scope.post = {};
		$scope.reset = function() {
        	$scope.post = {};
      	};
      	$scope.add = function(){
      		$scope.post.createDate = new Date();
      		$scope.post.lastEdited = $scope.post.createDate;
      		BlogService.addPost($scope.post);
      	};
    }
]);

adminControllers.controller('UserCtrl', ['$scope', 'UserService',
	function($scope, UserService){
		console.log('Getting Users');
		UserService.getUsers().then(function(data){
			$scope.userCollection = data;
			console.log(data);
		});
    }
]);

adminControllers.controller('UserDetailCtrl', ['$scope', 'UserService',
	function($scope, UserService){
		UserService.getUserById().then(function(data){
			$scope.user = data;
			console.log(data);
		});
    }
]);
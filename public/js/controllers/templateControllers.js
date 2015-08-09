'use strict';

/* Controllers */

var templateControllers = angular.module('templateControllers', []);

templateControllers.controller('NavigationCtrl', ['$scope', '$http',
	function($scope, $http){
		$http.get('data/navigation.json').success(function(data, status, headers, config) {
			$scope.links = data;



			var h = document.getElementById("nav");
			var readout = document.getElementById("main");
			var stuck = false;
			var stickPoint = getDistance();

			function getDistance() {
			  var topDist = h.offsetTop;
			  return topDist;
			}
			window.onscroll = function(e) {
			  var distance = getDistance() - window.pageYOffset;
			  var offset = window.pageYOffset;
			  //console.log('offsetTop:' + stickPoint + '   distance:' + distance + '   offset:' + offset + '   stuck:' + stuck);
			  if ( (distance <= 0) && !stuck) {
			    h.style.position = 'fixed';
			    stuck = true;
			  } else if (stuck && (offset <= stickPoint)){
			    h.style.position = 'static';
			    stuck = false;
			  }
			}



			//toggle functionality
		    var anchor = document.getElementsByClassName('lines-button x');
		    var links = document.getElementsByClassName('link');
		    var index;			
		    
		    [].forEach.call(anchor, function(anchor){
				var open = false;
				anchor.onclick = function(event){

					event.preventDefault();
					if(!open){
						this.classList.add('close');
						for (index = 0; index < links.length; ++index) {
							links[index].classList.add('open');
						}
						open = true;
					}
					else{
						this.classList.remove('close');
						for (index = 0; index < links.length; ++index) {
							links[index].classList.remove('open');
						}
						open = false;
					}
				}
		    }); 
			//end controller
		});
	}
]);
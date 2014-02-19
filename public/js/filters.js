'use strict';

/* Filters */

angular.module('frshnssFilters', []).filter('locationLink', function() {
  return function(input) {
	if(input.indexOf("Hasselt") != -1){
		return "http://maps.google.be/maps?q=Villa+Basta+vzw,+Schippersstraat,+Hasselt,+Belgi%C3%AB&hl=nl";
	}else{
		return "http://maps.google.be/maps?q=Rondpunt+26,+Genk,+Belgi%C3%AB&hl=nl";
	}
  };
});

angular.module('frshnssFilters', []).filter('location', function() {
  return function(input) {
	if(input.indexOf("Hasselt") != -1){
		return "HASSELT";
	}else{
		return "GENK";
	}
  };
});

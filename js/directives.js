'use strict';

/* Directives */


angular.module('myApp.directives', []).
	directive('dsRealisation', function() {
		return {
		  restrict: 'E',
		  templateUrl: 'realisation.html'
		};
	})

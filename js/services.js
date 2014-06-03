'use strict';

angular.module('resumeeApp.services', []).
	factory('RealisationsService', function($http) {
		var RealisationsService = {};
		
		RealisationsService.getReal = function() {
			return $http({
		        method: 'GET', 
		        url: './data/realisations.json'
			});
		}

		return RealisationsService;
	}).

	factory('ConferencesService', function($http) {
		var ConferencesService = {};
		
		ConferencesService.getReal = function() {
			return $http({
		        method: 'GET', 
		        url: './data/conferences.json'
			});
		}

		return ConferencesService;
	});
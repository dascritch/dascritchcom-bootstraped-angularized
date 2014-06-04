'use strict';

angular.module('resumeeApp.services', []).
	factory('RealisationsService', function($http) {
		var RealisationsService = {};
		
		RealisationsService.getReal = function(id) {

			// NOTE : j'aurais aimé faire autrement, mais htaccess n'est pas forcément autorisé partout, et mes manips nécessaires encore moins sur github gh-pages...

			var key = ( id === undefined ? 'index' : id ) +'.json';

			return $http({
		        method: 'GET', 
		        url: './data/realisations/index.json'
			});
		}

		return RealisationsService;
	}).

	factory('ConferencesService', function($http) {
		var ConferencesService = {};
		
		ConferencesService.getConf = function(id) {
			var key = ( id === undefined ? 'index' : id ) +'.json';
			return $http({
		        method: 'GET', 
		        url: './data/conferences/'+key
			});
		}

		return ConferencesService;
	});
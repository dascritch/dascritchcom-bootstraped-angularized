'use strict';

angular.module('resumeeApp.services', []).
	factory('RealisationsService',  function($http) {
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
	}).

	factory('AspectService', function() {
		var AspectService = {};
		
		AspectService.hideLists = function() {
			$('section').slideUp();
			$.scrollTo('article', 800);
		}

		AspectService.backFromItem = function(id) {
			var delaySliding = 100;
			$('section').slideDown(delaySliding);
            // on est d'accord ? c'est über crade. Sauf que les hauteurs changeants de concert, impossible de calculer d'entrée le bon offset
            // et impossible de chainer jquery.delay()
            setTimeout(function(){$.scrollTo('#'+id, 800)},delaySliding);
		}

		return AspectService;
	});
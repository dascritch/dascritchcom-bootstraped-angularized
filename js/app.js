'use strict';


// Declare app level module which depends on filters, and services
angular.module('resumeeApp', [
  'ngRoute',
  'resumeeApp.controllers',
  'resumeeApp.services',
]).
config(function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/Realisation/:realId', {
			templateUrl: 'partials/realisation.html',
			controller: 'RealisationsController',
			resolve: {
				delay: function() {
					// pas joli joli, surtout que j'aimerais rester dans l'usage d'angular, mais pour le coup, je fais au  plus pressé
					$('section').slideUp();
					$.scrollTo('article', 800);
				}
			}
		}).
		when('/Conference/:confId', {
			templateUrl: 'partials/conference.html',
			controller: 'ConferencesController',
			resolve: {
				delay: function() {
					$('section').slideUp();
					$.scrollTo('article', 800);
				}
			}
		});

	// effectivement, sans cette directive, on est coincé en mode sous répertoire 
	$locationProvider.html5Mode(false);

});

'use strict';

angular.module('resumeeApp.controllers', []).
	controller('RealisationsController', ['$scope','RealisationsService', function($scope,RealisationsService) {
        $scope.items = [];
        
        RealisationsService.getReal().success(function (response) {
            $scope.items = response;
        });

        $scope.focusItem = function() {
            console.log("jjjj");
        }
	}]).
    controller('ConferencesController', ['$scope','ConferencesService', function($scope,ConferencesService) {
        $scope.items = [];
        
        ConferencesService.getReal().success(function (response) {
            $scope.items = response;
        });
    }]);

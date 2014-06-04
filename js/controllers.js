'use strict';

angular.module('resumeeApp.controllers', []).
	controller('RealisationsController', ['$scope','$routeParams','RealisationsService', function($scope,$routeParams,RealisationsService) {
        $scope.items = [];
        $scope.params = $routeParams;
        
        RealisationsService.getReal($scope.params.realId).success(function (response) {
            $scope.items = response;

            if ($scope.params.realId !== undefined) {
                $scope.item = $scope.items[$scope.params.realId];
            }
        });

	}]).
    controller('ConferencesController', ['$scope','ConferencesService', function($scope,ConferencesService) {
        $scope.items = [];
        
        ConferencesService.getReal().success(function (response) {
            $scope.items = response;
        });
    }]);

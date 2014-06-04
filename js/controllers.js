'use strict';

angular.module('resumeeApp.controllers', []).
	controller('RealisationsController', ['$scope','$routeParams','$sce','RealisationsService', function($scope,$routeParams,$sce,RealisationsService) {
        $scope.items = [];
        $scope.params = $routeParams;
        
        RealisationsService.getReal($scope.params.realId).success(function (response) {
            $scope.items = response;

            if ($scope.params.realId !== undefined) {
                $scope.item = $scope.items[$scope.params.realId];
                $scope.item.longDesc= $sce.trustAsHtml($scope.item.longDesc.replace(/\n/g,'<br />')); //  là, il m'agace
            }
        });

        $scope.backFromItem = function(){
            $('#realisations ul').slideDown();
            $.scrollTo('#realisations', 800);

        }

	}]).
    controller('ConferencesController', ['$scope','ConferencesService', function($scope,ConferencesService) {
        $scope.items = [];
        
        ConferencesService.getReal().success(function (response) {
            $scope.items = response;
        });
    }]);

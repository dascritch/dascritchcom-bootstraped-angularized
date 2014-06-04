'use strict';

angular.module('resumeeApp.controllers', []).
	controller('RealisationsController', ['$scope','$routeParams','$sce','RealisationsService','AspectService', function($scope,$routeParams,$sce,RealisationsService,AspectService) {
        $scope.items = [];
        $scope.params = $routeParams;
        
        RealisationsService.getReal($scope.params.realId).success(function (response) {
            $scope.items = response;

            if ($scope.params.realId !== undefined) {
                // Soyons sérieux, oui, cela n'a rien à faire dans le controlleur, mais je fais au plus pressé
                $scope.item = $scope.items[$scope.params.realId];
                $scope.item.longDesc= $sce.trustAsHtml($scope.item.longDesc.replace(/\n/g,'<br />')); //  là, il m'agace
            }
        });

        $scope.backFromItem = AspectService.backFromItem;

	}]).
    controller('ConferencesController', ['$scope','$routeParams','$sce','ConferencesService','AspectService', function($scope,$routeParams,$sce,ConferencesService,AspectService) {
        $scope.items = [];
        $scope.params = $routeParams;
        // ces doublons, ces dooooouuuubllooooooons :(
        ConferencesService.getConf($scope.params.confId).success(function (response) {
            function cleanate(item) {
                item.location =  $sce.trustAsHtml(item.location.replace(/\n/g,'<br />'));
                return item;
            }
            // je déteste cette notation, mais faut penser à ce pauvre Safari aussi
            for( var i in response) { 
                if (response.hasOwnProperty(i)) {
                    response[i] = cleanate(response[i]);
                }
            }

            $scope.items = response;
            if ($scope.params.confId !== undefined) {
                $scope.item = $scope.items[$scope.params.confId];
            }
        });
        
        $scope.backFromItem = AspectService.backFromItem;
    }]);

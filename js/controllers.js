'use strict';

angular.module('resumeeApp.controllers', []).
	controller('RealisationsController', ['$scope','$routeParams','$sce','RealisationsService', function($scope,$routeParams,$sce,RealisationsService) {
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

        $scope.backFromItem = function(){
            $('#realisations ul').slideDown();
            $.scrollTo('#realisations', 800);
        }

	}]).
    controller('ConferencesController', ['$scope','$sce','ConferencesService', function($scope,$sce,ConferencesService) {
        $scope.items = [];
        
        ConferencesService.getConf().success(function (response) {
            // je déteste cette notation, mais faut penser à ce pauvre Safari aussi
            for( var i in response) { 
                if (response.hasOwnProperty(i)) {
                    response[i].location =  $sce.trustAsHtml(response[i].location.replace(/\n/g,'<br />'));
                }
            }
            $scope.items = response;
        });
    }]);

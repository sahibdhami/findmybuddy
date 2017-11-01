module FindMyBuddy.App.Controllers {
    "use strict";
    var module = angular.module("FindMyBuddy.App.Controllers", []);

    interface IHomeScope extends ng.IScope {
        homeMessage: string;
        
    }

    class HomeController {

        constructor($scope: IHomeScope) {
            $scope.homeMessage = "Welome!!";

        }
        }

        module.controller("homeController", ['$scope', ($scope) => new HomeController($scope)]);
        }
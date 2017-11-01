/// <reference path="../../../../typings/tsd.d.ts" />
module FindMyBuddy.App.Directives {
    "use strict";

    interface IHeaderScope extends ng.IScope {
        UserName: string;
    }
    class headerDirective implements ng.IDirective {

        restrict= 'E';
        replace = true;
        template = '<div class="container"><div class= "row" ><div class="col-xs">One of three columns</div> <div class="col-xs" > One of three columns</div><div class="col-xs">One of three columns</div></div></div>';
        constructor() {
        }
        //constructor(private $location: ng.ILocationService, private toaster: ToasterService) {
        //}
        link = (scope: IHeaderScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrls) => {
            scope.UserName = "Sam";

        }
        static factory(): ng.IDirectiveFactory {
            var directive = () => new headerDirective();
            //const directive = ($location: ng.ILocationService, toaster: ToasterService) => new MyDirective($location, toaster);
            //directive.$inject = ['$location', 'toaster'];
            return directive;
        }
    }

    angular.module('FindMyBuddy')
        .directive('headerDir', headerDirective.factory());
}
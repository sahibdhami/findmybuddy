/// <reference path="../../typings/tsd.d.ts" />
module FindMyBuddy {
    "use strict";
   
    angular.module("FindMyBuddy", ["FindMyBuddy.Core","ngRoute"])
        .config([
            '$routeProvider', function ($route) {
                $route
                    .when("/", {
                        templateUrl: "/pages/home.htm",
                        controller: "homeController"
                    })
                    .when("/home", {
                        templateUrl: "/pages/home.htm",
                        controller: "homeController"
                    });
            }])
        .run(['$cordova', function ($cordova: Core.Services.ICordovaService) {

        $cordova
            .ready(function () {
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.

        })
            .onPause(function () {
            // TODO: This application has been suspended. Save application state here.

        })
            .onResume(function () {
            // TODO: This application has been reactivated. Restore application state here.

        })
            .on('online', function () {
            // TODO: The application is currently online. Set the application behavior here.
            // Don't forget to add the org.apache.cordova.network-information plugin in order to have this event working.

        })
            .on('offline', function () {
            // TODO: The application is currently offline. Set the application behavior here.
            // Don't forget to add the org.apache.cordova.network-information plugin in order to have this event working.

        })
            .on('batterycritical', function () {
            // TODO: The device is entering the battery critical status. Set the application behavior here.
            // Don't forget to add the org.apache.cordova.battery-status plugin in order to have this event working.

        });
    }]);
}
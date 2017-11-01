var FindMyBuddy;
(function (FindMyBuddy) {
    "use strict";
    angular.module("FindMyBuddy", ["FindMyBuddy.Core", "ngRoute"]).config([
        '$routeProvider',
        function ($route) {
            $route.when("/", {
                templateUrl: "/pages/home.htm",
                controller: "homeController"
            }).when("/home", {
                templateUrl: "/pages/home.htm",
                controller: "homeController"
            });
        }
    ]).run(['$cordova', function ($cordova) {
        $cordova.ready(function () {
        }).onPause(function () {
        }).onResume(function () {
        }).on('online', function () {
        }).on('offline', function () {
        }).on('batterycritical', function () {
        });
    }]);
})(FindMyBuddy || (FindMyBuddy = {}));
var FindMyBuddy;
(function (FindMyBuddy) {
    var Core;
    (function (Core) {
        'uses strict';
        angular.module("FindMyBuddy.Core", ["FindMyBuddy.Core.Services", "FindMyBuddy.App.Controllers"]);
    })(Core = FindMyBuddy.Core || (FindMyBuddy.Core = {}));
})(FindMyBuddy || (FindMyBuddy = {}));
var FindMyBuddy;
(function (FindMyBuddy) {
    var Core;
    (function (Core) {
        var Services;
        (function (Services) {
            "use strict";
            var module = angular.module("FindMyBuddy.Core.Services", []);
            var CordovaService = (function () {
                function CordovaService($q, $injector, $rootScope) {
                    this.events = new Array();
                    this.$q = $q;
                    this.$injector = $injector;
                    this.$rootScope = $rootScope;
                    this.readyEventDefer = this.$q.defer();
                    this.whenReady = this.readyEventDefer.promise;
                    return this;
                }
                CordovaService.prototype.on = function (eventName, callback, code) {
                    return this._on(eventName, callback, code);
                };
                CordovaService.prototype.off = function (eventName, code) {
                    if (!code)
                        return;
                    var filter = this.events.filter(function (event) {
                        return event.code == code;
                    });
                    if (!filter.length)
                        return;
                    var item = filter[0];
                    this.events.splice(this.events.indexOf(item), 1);
                    document.removeEventListener(eventName, item.event);
                };
                CordovaService.prototype.ready = function (callback) {
                    return this._ready(callback);
                };
                CordovaService.prototype.onPause = function (callback, code) {
                    return this._on("pause", callback, code);
                };
                CordovaService.prototype.onResume = function (callback, code) {
                    return this._on("resume", callback, code);
                };
                CordovaService.prototype.onBackButton = function (callback, code) {
                    return this._on("backbutton", callback, code);
                };
                CordovaService.prototype.onMenuButton = function (callback, code) {
                    return this._on("menubutton", callback, code);
                };
                CordovaService.prototype.onSearchButton = function (callback, code) {
                    return this._on("searchbutton", callback, code);
                };
                CordovaService.prototype.onStartCallButton = function (callback, code) {
                    return this._on("startcallbutton", callback, code);
                };
                CordovaService.prototype.onEndCallButton = function (callback, code) {
                    return this._on("endcallbutton", callback, code);
                };
                CordovaService.prototype.onVolumeDownButton = function (callback, code) {
                    return this._on("volumedownbutton", callback, code);
                };
                CordovaService.prototype.onVolumeUpButton = function (callback, code) {
                    return this._on("volumeupbutton", callback, code);
                };
                CordovaService.prototype._on = function (eventName, callback, code) {
                    var $this = this;
                    $this.whenReady = $this.whenReady.then(function () {
                        $this.off(eventName, code);
                        var item = {
                            code: code,
                            eventName: eventName,
                            event: $this.applyFunction(callback, eventName)
                        };
                        if (code)
                            $this.events.push(item);
                        document.addEventListener(eventName, item.event, false);
                    });
                    return $this;
                };
                CordovaService.prototype._ready = function (callback) {
                    var $this = this;
                    document.addEventListener("deviceready", function () {
                        $this.applyFunction(callback, 'deviceready')();
                        $this.readyEventDefer.resolve();
                    });
                    return $this;
                };
                CordovaService.prototype.applyFunction = function (callback, eventName) {
                    var $this = this;
                    return function () {
                        $this.$injector.invoke(callback);
                    };
                };
                return CordovaService;
            })();
            module.factory("$cordova", ["$q", "$injector", "$rootScope", function ($q, $injector, $rootScope) { return new CordovaService($q, $injector, $rootScope); }]);
        })(Services = Core.Services || (Core.Services = {}));
    })(Core = FindMyBuddy.Core || (FindMyBuddy.Core = {}));
})(FindMyBuddy || (FindMyBuddy = {}));
//# sourceMappingURL=app.js.map
(function () {

    'use strict';
    var app = angular.module('gdgApp.wwa', ['ngRoute', 'gdgApp.backend', 'gdgApp.promises']);

    var config = {};
    app.constant('wwaConfig', config);

    app.config(['$routeProvider', 'promisesConfig', function ($routeProvider, promisesConfig) {
        $routeProvider.when('/who-we-are', {
            templateUrl: 'who-we-are/who-we-are.html',
            controller: 'WhoWeAreCtrl',
            resolve: {
                contributorListPromise: promisesConfig.contributorListPromise
            }
        })
    }]);

})();
(function () {

    'use strict';
    var app = angular.module('gdgApp.mainpage', ['ngRoute', 'gdgApp.backend', 'gdgApp.promises', 'gdgApp.navigation']);

    var config = {};
    app.constant('mainpageConfig', config);

    app.config(['$routeProvider', 'promisesConfig',
        function ($routeProvider, promisesConfig) {
            $routeProvider.when('/', {
                templateUrl: 'mainpage/mainpage.html',
                controller: 'MainPageCtrl',
                resolve: {
                    contributorListPromise: promisesConfig.contributorListPromise,
                    postListPromise: promisesConfig.postListPromise,
                    eventListPromise: promisesConfig.eventListPromise
                }
            }).otherwise({
                redirectTo: '/'
            });
        }
    ]);

})();
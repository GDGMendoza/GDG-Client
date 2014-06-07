(function () {

    'use strict';

    var app = angular.module('gdgApp', ['ngRoute',
        'gdgApp.backend', 'gdgApp.promises','gdgApp.wwa', 'gdgApp.blog', 'gdgApp.events',
        'gdgApp.navigation']);


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
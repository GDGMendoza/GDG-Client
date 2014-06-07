(function () {

    'use strict';
    var app = angular.module('gdgApp', ['ngSanitize', 'ngRoute', 'ngAnimate',
        'gdgApp.backend', 'gdgApp.wwa', 'gdgApp.blog', 'gdgApp.events']);

    app.config(['$routeProvider', 'wwaConfig', 'blogConfig', 'eventsConfig',
        function ($routeProvider, wwaConfig, blogConfig, eventsConfig) {
            $routeProvider.when('/', {
                templateUrl: 'mainpage/mainpage.html',
                controller: 'MainPageCtrl',
                resolve: {
                    contributorListPromise: wwaConfig.promises.contributorListPromise,
                    postListPromise: blogConfig.promises.postListPromise,
                    eventListPromise: eventsConfig.promises.eventListPromise
                }
            }).otherwise({
                redirectTo: '/'
            });
        }]);

})();
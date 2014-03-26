'use strict';

angular.module('gdgsiteApp', [
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/who-we-are',{
                templateUrl:'views/wwa.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

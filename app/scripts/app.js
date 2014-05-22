'use strict';

var app = angular.module('gdgsiteApp', ['ngSanitize', 'ngRoute', 'ngAnimate'])
    .config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {

        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";

        var promisesProvider = {};

        promisesProvider.contributorListPromise = ['$q', 'ContributorService', function ($q, ContributorService) {
            var defer = $q.defer();
            if (_.isEmpty(ContributorService.contributorList)) {
                ContributorService.findAllContributors().then(function () {
                    defer.resolve();
                });
            } else defer.resolve();
            return defer.promise;
        }];

        promisesProvider.postListPromise = ['$q', 'PostService', function ($q, PostService) {
            var defer = $q.defer();
            if (_.isEmpty(PostService.postList)) {
                PostService.findMorePosts().then(function () {
                    defer.resolve();
                });
            } else defer.resolve();
            return defer.promise;
        }];

        promisesProvider.eventListPromise = ['$q', 'EventService', function ($q, EventService) {
            var defer = $q.defer();
            if (_.isEmpty(EventService.eventList)) {
                EventService.findMoreEvents().then(function () {
                    defer.resolve();
                });
            } else defer.resolve();
            return defer.promise;
        }];

        promisesProvider.singlePostPromise = ['$q', '$route', 'PostService', function ($q, $route, PostService) {
            var defer = $q.defer();
            var uniqueTitle = $route.current.params.uniqueTitle;
            if (!PostService.postList[uniqueTitle]) {
                PostService.findPostByUniqueTitle(uniqueTitle).then(function () {
                    defer.resolve();
                });
            } else defer.resolve();
            return defer.promise;
        }];

        //TODO: promisesProvider.singleEventPromise

        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeCtrl',
                resolve: {
                    contributorListPromise: promisesProvider.contributorListPromise,
                    postListPromise: promisesProvider.postListPromise,
                    eventListPromise: promisesProvider.eventListPromise
                }
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blogCtrl',
                resolve: {
                    contributorListPromise: promisesProvider.contributorListPromise,
                    postListPromise: promisesProvider.postListPromise
                }
            })
            .when('/blog/:uniqueTitle', {
                templateUrl: 'views/postView.html',
                controller: 'PostCtrl',
                controllerAs: 'postCtrl', //constrollerAs
                resolve: {
                    contributorListPromise: promisesProvider.contributorListPromise,
                    postPromise: promisesProvider.singlePostPromise
                }
            })
            .when('/who-we-are', {
                templateUrl: 'views/wwa.html',
                controller: 'WhoWeAreCtrl',
                controllerAs: 'wwaCtrl',
                resolve: {
                    contributorListPromise: promisesProvider.contributorListPromise
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
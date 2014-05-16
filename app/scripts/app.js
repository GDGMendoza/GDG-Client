'use strict';

var app = angular.module('gdgsiteApp', ['ngSanitize', 'ngRoute', 'ngAnimate'])
    .config(['$httpProvider', '$routeProvider', function ($httpProvider, $routeProvider) {
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeCtrl',
                resolve: {
                    contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
                        var defer = $q.defer();
                        if (_.isEmpty(ContributorService.contributorList)) {
                            ContributorService.findAllContributors().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }],
                    postListPromise: ['$q', 'PostService', function ($q, PostService) {
                        var defer = $q.defer();
                        if (_.isEmpty(PostService.postList)) {
                            PostService.findMorePosts().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }],
                    eventListPromise: ['$q', 'EventService', function ($q, EventService) {
                        var defer = $q.defer();
                        if (_.isEmpty(EventService.eventList)) {
                            EventService.findMoreEvents().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }]
                }
            })
            .when('/blog', {
                templateUrl: 'views/blog.html',
                controller: 'BlogCtrl',
                controllerAs: 'blogCtrl',
                resolve: {
                    contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
                        var defer = $q.defer();
                        if (_.isEmpty(ContributorService.contributorList)) {
                            ContributorService.findAllContributors().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }],
                    postListPromise: ['$q', 'PostService', function ($q, PostService) {
                        var defer = $q.defer();
                        if (_.isEmpty(PostService.postList)) {
                            PostService.findMorePosts().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }]
                }
            })
            .when('/blog/:uniqueTitle', {
                templateUrl: 'views/postView.html',
                controller: 'PostCtrl',
                constrollerAs: 'postCtrl',
                resolve: {
                    contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
                        var defer = $q.defer();
                        if (_.isEmpty(ContributorService.contributorList)) {
                            ContributorService.findAllContributors().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }],
                    postPromise: ['$q', '$route', 'PostService', function ($q, $route, PostService) {
                        var defer = $q.defer();
                        var uniqueTitle = $route.current.params.uniqueTitle;
                        if (!PostService.postList[uniqueTitle]) {
                            PostService.findPostByUniqueTitle(uniqueTitle).then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }]
                }
            })
            .when('/who-we-are', {
                templateUrl: 'views/wwa.html',
                controller: 'WhoWeAreCtrl',
                controllerAs: 'wwaCtrl',
                resolve: {
                    contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
                        var defer = $q.defer();
                        if (_.isEmpty(ContributorService.contributorList)) {
                            ContributorService.findAllContributors().then(function () {
                                defer.resolve();
                            });
                        } else defer.resolve();
                        return defer.promise;
                    }]
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
'use strict';

angular.module('gestorApp', [
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/clean.html',
                controller: 'CleanCtrl'
            })
            .when('/contributor/list', {
                templateUrl: 'views/contributorList.html',
                controller: 'ContributorListCtrl'
            })
            .when('/contributor/:id', {
                templateUrl: 'views/contributor.html',
                controller: 'ContributorCtrl'
            })
            .when('/post/list', {
                templateUrl: 'views/postList.html',
                controller: 'PostListCtrl'
            })
            .when('/post/:id', {
                templateUrl: 'views/post.html',
                controller: 'PostCtrl'
            })
            .when('/event/list', {
                templateUrl: 'views/eventList.html',
                controller: 'EventListCtrl'
            })
            .when('/event/:id', {
                templateUrl: 'views/event.html',
                controller: 'EventCtrl'
            })
            .when('/session/list', {
                templateUrl: 'views/sessionList.html',
                controller: 'SessionListCtrl'
            })
            .when('/session/:id', {
                templateUrl: 'views/session.html',
                controller: 'SessionCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .factory('bypass', function(){
        return {
            contributorList: {},
            eventList: {},
            postList: {},
            sessionList: {}
        }
    });

/*
 .when('/:model/list', {
 templateUrl: 'views/main.html',
 controller: 'MainCtrl'
 })
 .when('/:model/edit', {
 templateUrl: 'views/main.html',
 controller: 'MainCtrl'
 })
 */
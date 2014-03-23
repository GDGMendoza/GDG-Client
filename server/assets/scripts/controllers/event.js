'use strict';

angular.module('gestorApp')
    .controller('EventListCtrl', function ($scope, $http, bypass) {
        $scope.localBypass = bypass;
        $http.get('/event').success(function(data){
            $scope.eventList = data;
        });
    })
    .controller('EventCtrl', function ($scope) {

    });
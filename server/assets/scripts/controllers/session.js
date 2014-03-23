'use strict';

angular.module('gestorApp')
    .controller('SessionListCtrl', function ($scope, $http, bypass) {
        $scope.localBypass = bypass;
        $http.get('/session').success(function(data){
            $scope.sessionList = data;
        });
    })
    .controller('SessionCtrl', function ($scope) {

    });
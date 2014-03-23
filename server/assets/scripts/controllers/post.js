'use strict';

angular.module('gestorApp')
    .controller('PostListCtrl', function ($scope, $http, bypass) {
        $scope.localBypass = bypass;
        $http.get('/post').success(function(data){
            $scope.postList = data;
        });
    })
    .controller('PostCtrl', function ($scope) {

    });
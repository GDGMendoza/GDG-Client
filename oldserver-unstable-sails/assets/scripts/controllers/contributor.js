'use strict';

angular.module('gestorApp')
    .controller('ContributorListCtrl', function ($scope, $http) {
        $http
            .get('/contributor').success(function (data) {
                $scope.contributorList = data;
            })
            .error(function (err) {
                console.log(err);
            });
    })
    .controller('ContributorCtrl', function ($scope, $routeParams, $http) {
        $http
            .get('/contributor').success(function (data) {
                $scope.contributor = data[$routeParams.id];
            })
            .error(function (err) {
                console.log(err);
            });
    });

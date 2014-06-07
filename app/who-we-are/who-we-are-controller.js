(function () {

    'use strict';
    var app = angular.module('gdgApp.wwa');

    app.controller("WhoWeAreCtrl", ['$scope', 'ContributorService',
        function ($scope, ContributorService) {
            $scope.contributorList = ContributorService.contributorList;

            $scope.isWhoWeAre = true;
        }
    ]);

})();
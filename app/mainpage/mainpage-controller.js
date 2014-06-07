(function () {

    'use strict';
    var app = angular.module('gdgApp');

    app.controller('MainPageCtrl', ['$scope', 'ContributorService', 'EventService', 'PostService',
        function ($scope, ContributorService, EventService, PostService) {
            $scope.contributorList = ContributorService.contributorList;
            $scope.eventList = EventService.eventList;
            $scope.postList = PostService.postList;
        }
    ]);

})();
(function () {

    'use strict';
    var app = angular.module('gdgApp.events');

    app.controller('EventListCtrl', ['$scope', 'EventService', 'ContributorService',
        function ($scope, EventService, ContributorService) {
            $scope.eventList = EventService.eventList;
            $scope.contributorList = ContributorService.contributorList;
        }
    ]);

})();
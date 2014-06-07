(function () {

    'use strict';
    var app = angular.module('gdgApp.events');

    app.controller('EventDetailCtrl', ['$scope', '$routeParams', 'EventService', 'ContributorService',
        function ($scope, $routeParams, EventService, ContributorService) {
            $scope.eventDetail = EventService.eventList[$routeParams.uniqueTitle];
            $scope.contributorList = ContributorService.contributorList;
        }
    ]);

})();
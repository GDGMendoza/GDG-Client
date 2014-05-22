'use strict';

angular.module('gdgsiteApp')
    .controller('EventCtrl', ['$scope', '$window', '$routeParams', 'EventService', 'ContributorService', function ($scope, $window, $routeParams, EventService, ContributorService) {

        var eventCtrl = this;
        eventCtrl.eventList = EventService.eventList;
        eventCtrl.currentEvent = eventCtrl.eventList[$routeParams.uniqueTitle];
        eventCtrl.contributorList = ContributorService.contributorList;

    }]);

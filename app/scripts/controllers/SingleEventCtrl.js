'use strict';

angular.module('gdgsiteApp')
    .controller('SingleEventCtrl', ['$scope', '$routeParams', 'EventService', 'ContributorService', function ($scope, $routeParams, EventService, ContributorService) {

        var singleEventCtrl = this;
        singleEventCtrl.currentEvent = EventService.eventList[$routeParams.uniqueTitle];
        singleEventCtrl.contributorList = ContributorService.contributorList;

    }]);

'use strict';

angular.module('gdgsiteApp')
    .controller('EventCtrl', ['$scope', '$window', '$routeParams', 'EventService', 'ContributorService', function ($scope, $window, $routeParams, EventService, ContributorService) {

        var eventCtrl = this;
        eventCtrl.eventList = EventService.eventList;
        eventCtrl.contributorList = ContributorService.contributorList;

        eventCtrl.getEventTemplate = function (index) {
            if ($window.innerWidth <= 640 || index % 4 === 0) {
                return 'views/event/preview/big.html'
            } else {
                return 'views/event/preview/tiny.html'
            }
        }

    }]);

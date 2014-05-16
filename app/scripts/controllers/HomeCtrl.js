'use strict';

angular.module('gdgsiteApp')
    .controller('HomeCtrl', ['$scope', 'ContributorService', 'EventService', 'PostService', function ($scope, ContributorService, EventService, PostService) {

        var homeCtrl = this;
        homeCtrl.contributorList = ContributorService.contributorList;
        homeCtrl.eventList = EventService.eventList;
        homeCtrl.postList = PostService.postList;

    }]);

(function () {

    'use strict';
    var app = angular.module('gdgApp.promises', []);

    var config = {
        eventListPromise: ['$q', 'EventService', function ($q, EventService) {
            var defer = $q.defer();
            if (angular.equals({}, EventService.eventList)) {
                EventService.findMoreEvents().then(function () {
                    defer.resolve();
                });
            } else defer.resolve();
            return defer.promise;
        }],
        postListPromise: ['$q', 'PostService', function ($q, PostService) {
            var defer = $q.defer();
            if (angular.equals({}, PostService.postList)) {
                PostService.findMorePosts().then(defer.resolve, defer.reject);
            } else defer.resolve();
            return defer.promise;
        }],
        contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
            var defer = $q.defer();
            if (angular.equals({}, ContributorService.contributorList)) {
                ContributorService.findAllContributors().then(defer.resolve, defer.reject);
            } else defer.resolve();
            return defer.promise;
        }]
    };
    app.constant('promisesConfig', config);

})();
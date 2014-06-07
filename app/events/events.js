(function () {

    'use strict';
    var app = angular.module('gdgApp.events', ['ngRoute', 'gdgApp.backend', 'gdgApp.wwa']);

    var config = {
        promises: {
            eventListPromise: ['$q', 'EventService', function ($q, EventService) {
                var defer = $q.defer();
                if (angular.equals({}, EventService.eventList)) {
                    EventService.findMoreEvents().then(function () {
                        defer.resolve();
                    });
                } else defer.resolve();
                return defer.promise;
            }],
            eventDetailPromise: ['$q', '$route', 'EventService', function ($q, $route, EventService) {
                var defer = $q.defer();
                var uniqueTitle = $route.current.params.uniqueTitle;
                if (!EventService.postList[uniqueTitle]) {
                    EventService.findEventByUniqueTitle(uniqueTitle).then(defer.resolve, defer.reject);
                } else defer.resolve();
                return defer.promise;
            }]
        }
    };
    app.constant('eventsConfig', config);

    app.config(['$routeProvider', 'eventsConfig', 'wwaConfig', function ($routeProvider, eventsConfig, wwaConfig) {
        $routeProvider.when('/events', {
            templateUrl: 'events/list/event-list.html',
            controller: 'EventListCtrl',
            resolve: {
                contributorListPromise: wwaConfig.promises.contributorListPromise,
                postListPromise: eventsConfig.promises.eventListPromise
            }
        });
        $routeProvider.when('/events/:uniqueTitle', {
            templateUrl: 'events/detail/event-detail.html',
            controller: 'EventDetailCtrl',
            resolve: {
                contributorListPromise: wwaConfig.promises.contributorListPromise,
                postPromise: eventsConfig.promises.eventDetailPromise
            }
        });
    }]);

})();
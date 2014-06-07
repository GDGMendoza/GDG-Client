(function () {

    'use strict';
    var app = angular.module('gdgApp.events', ['ngRoute', 'gdgApp.backend', 'gdgApp.promises']);

    var config = {
        promises: {
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

    app.config(['$routeProvider', 'promisesConfig', 'eventsConfig', function ($routeProvider, promisesConfig, eventsConfig) {
        $routeProvider.when('/events', {
            templateUrl: 'events/list/event-list.html',
            controller: 'EventListCtrl',
            resolve: {
                contributorListPromise: promisesConfig.contributorListPromise,
                postListPromise: promisesConfig.eventListPromise
            }
        });
        $routeProvider.when('/events/:uniqueTitle', {
            templateUrl: 'events/detail/event-detail.html',
            controller: 'EventDetailCtrl',
            resolve: {
                contributorListPromise: promisesConfig.contributorListPromise,
                postPromise: eventsConfig.promises.eventDetailPromise
            }
        });
    }]);

})();
(function () {

    'use strict';
    var app = angular.module('gdgApp.wwa', ['ngRoute', 'gdgApp.backend']);

    var config = {
        promises: {
            contributorListPromise: ['$q', 'ContributorService', function ($q, ContributorService) {
                var defer = $q.defer();
                if (angular.equals({}, ContributorService.contributorList)) {
                    ContributorService.findAllContributors().then(defer.resolve, defer.reject);
                } else defer.resolve();

                return defer.promise;
            }]
        }
    };
    app.constant('wwaConfig', config);

    app.config(['$routeProvider', 'wwaConfig', function ($routeProvider, wwaConfig) {
        $routeProvider.when('/who-we-are', {
            templateUrl: 'who-we-are/who-we-are.html',
            controller: 'WhoWeAreCtrl',
            resolve: {
                contributorListPromise: wwaConfig.promises.contributorListPromise
            }
        })
    }]);

})();
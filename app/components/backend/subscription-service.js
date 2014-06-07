(function () {

    'use strict';
    var app = angular.module('gdgApp.backend');

    app.factory('SubscriptionService', ['$http', 'backendConfig',
        function ($http, backendConfig) {
            var publicInterface = {};

            publicInterface.reverseGlobalSubscription = function (email) {
                return $http.post(backendConfig.basePath + "/tags", { email: email });
            };

            publicInterface.reverseTagSubscription = function (tag, email) {
                return $http.post(backendConfig.basePath + "/tags/" + tag, { email: email });
            };

            return publicInterface;
        }
    ]);

})();
'use strict';

angular.module('gdgsiteApp')
    .factory('SubscriptionService', ['$http', function ($http) {

        var publicInterface = {};
        publicInterface.reverseGlobalSubscription = function (email) {
            return $http.post("http://localhost/tags", { email: email });
        };

        publicInterface.reverseTagSubscription = function (tag, email) {
            return $http.post("http://localhost/tags/" + tag, { email: email });
        };

        return publicInterface;

    }]);
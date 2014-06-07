(function () {

    'use strict';
    var app = angular.module('gdgApp.backend', []);

    var config = {
        basePath: "https://localhost"
    };
    app.constant('backendConfig', config);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }]);

})();
(function () {

    'use strict';
    var app = angular.module('gdgApp.wwa');

    app.directive('iswhoweare', ['$location', function ($location) {
        return {
            restrict: "C",
            link: function (scope, element) {
                if ($location.url() === '/who-we-are') {
                    element.css({'padding-top': '0'});
                } else {
                    element.css({'padding-top': '60px'});
                }
            }
        }
    }]);

})();
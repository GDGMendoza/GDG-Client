(function () {

    'use strict';
    var app = angular.module('gdgApp.scrollAwareHeader');

    app.directive('scrollAwareHeader', ['$window', '$animate', function ($window, $animate) {
        return {
            restrict: 'A',
            link: function (scope, element) {
                var lastY = 0;
                angular.element($window).bind('scroll', function () {
                    if ($window.scrollY > lastY && $window.scrollY > 200) {
                        $animate.addClass(element, 'hideHeader');
                    } else {
                        $animate.removeClass(element, 'hideHeader');
                    }
                    lastY = $window.scrollY;
                });
            }
        }
    }]);

})();
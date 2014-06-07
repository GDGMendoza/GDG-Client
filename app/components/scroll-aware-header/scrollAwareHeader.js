(function () {

    'use strict';
    var app = angular.module('gdgApp');

    app.directive('scrollAwareHeader', ['$window', '$animate', function ($window, $animate) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
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

    app.animation('.hideHeader', function () {
        return {
            addClass: function (element) {
                TweenMax.to(element, 1, {y: '-100px'});
            },
            removeClass: function (element) {
                TweenMax.to(element, 0.5, {y: '0px'});
            }
        }
    });

})();
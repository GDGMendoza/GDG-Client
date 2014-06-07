(function () {

    'use strict';
    var app = angular.module('gdgApp');

    app.directive('navigation', [function () {
        return {
            restrict: "A",
            templateUrl: 'components/navigation/navigation.html',
            transclude: true,
            controller:
        }
    }]);

    app.directive('containerPerspective', ['$animate', function ($animate) {
        return {
            restrict: "A",
            require: '^navigation',
            link: function (scope, element, attrs, navigationCtrl) {
                scope.hideMenu = function () {
                    navigationCtrl.hideMenu();
                    $animate.removeClass(element, 'hideMenu');
                };
                scope.$watch(attrs.containerPerspective, function (newVal) {
                    if (!newVal) {
                        $animate.addClass(element, 'hideMenu');
                        element.bind('click', navigationCtrl.hideMenu);
                    } else {
                        $animate.removeClass(element, 'hideMenu');
                        element.unbind('click');
                    }
                });
            }
        }
    }]);

    app.directive('menuPerspective', ['$animate', function ($animate) {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                scope.$watch(attrs.menuPerspective, function (newVal) {
                    if (newVal) {
                        $animate.addClass(element, 'menuShow');
                    } else {
                        $animate.removeClass(element, 'menuShow');
                    }
                });
            }
        }
    }]);

    app.animation('.hideMenu', function () {
        var parent = null;
        return {
            addClass: function (element) {
                if (!parent) parent = angular.element(element.parent());
                parent.addClass('modalView');
                TweenMax.to(element, 1, {x: "400%", z: "-1500px", rotationY: -45});
            },
            removeClass: function (element) {
                if (!parent) parent = angular.element(element.parent());
                var callback = function () {
                    parent.removeClass('modalView');
                };
                TweenMax.to(element, 1, {x: 0, z: 0, rotationY: 0, onComplete: callback});
            }
        }
    });

    app.animation('.menuShow', function () {
        var children = null;
        var timeline;
        return {
            addClass: function (element) {
                if (!children) children = element.children();
                timeline = new TimelineLite();
                for (var i = 0; i < children.length; i++) {
                    timeline.fromTo(angular.element(children[i]), 0.1, {x: -50, opacity: 0}, {x: 0, opacity: 1})
                }
                timeline.play()
            },
            removeClass: function () {
                timeline.restart();
                timeline.pause();
            }
        }
    });

})();
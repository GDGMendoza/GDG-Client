(function () {

    'use strict';
    var app = angular.module('gdgApp.navigation');

    app.directive('navigation', [function () {
        return {
            restrict: "A",
            templateUrl: 'components/navigation/navigation.html',
            transclude: true,
            controller:'NavigationCtrl'
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

})();
(function () {

    'use strict';
    var app = angular.module('gdgApp.verticalAlign');

    app.directive('verticalAlign', ["$window", function ($window) {
        return {
            restrict: "A",
            link: function (scope, element) {
                function checkHeight(){
                    return element[0].clientHeight;
                }

                function alignElement(newHeight){
                    var height = ($window.innerHeight - newHeight) * 0.5;
                    element.css({'top': height.toString() + 'px'});
                }

                scope.$watch(checkHeight, alignElement);
            }
        }
    }]);

})();
'use strict';

angular.module('gdgsiteApp')
    .directive('verticalAlign', ["$window",function ($window) {
        return {
            restrict: "A",
            link:function(scope,element){
                var height = $window.innerHeight*0.5 - element[0].clientHeight * 0.5;
                element.css({'top':height.toString() + 'px'});
            }
        }
    }]);
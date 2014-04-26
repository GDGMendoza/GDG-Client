'use strict';

angular.module('gdgsiteApp')
    .directive('iswhoweare', ['$location',function ($location) {
        return {
            restrict: "C",
            link: function(scope,element){
                if($location.url() === '/who-we-are'){
                    element.css({'padding-top':'0'});
                }else{
                    element.css({'padding-top':'10px'});
                }
            }
        }
    }]);
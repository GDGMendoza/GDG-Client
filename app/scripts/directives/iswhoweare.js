'use strict';

angular.module('gdgsiteApp')
    .directive('iswhoweare', ['$location',function ($location) {
        return {
            restrict: "C",
            link: function(scope,element,attrs){
                if($location.url()=='/who-we-are'){
                    element.css({'max-width':'100%','padding-top':'0'});
                }else{
                    element.css({'max-width':'940px','padding-top':'10px'});
                }
            }
        }
    }]);
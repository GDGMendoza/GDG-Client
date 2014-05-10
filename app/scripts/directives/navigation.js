'use strict';

angular.module('gdgsiteApp')
    .directive('navigation', [function () {
        return {
            restrict: "A",
            templateUrl:'views/directives/navigation.html',
            transclude:true,
            controller: function($scope){
                $scope.menu = {visible:false};
                $scope.toggleMenu = function(){
                    $scope.menu.visible = !$scope.menu.visible;
                };
                this.hideMenu = function(){
                    $scope.menu.visible = false;
                    $scope.$apply();
                };
            }
        }
    }]);

angular.module('gdgsiteApp')
    .directive('containerPerspective', ['$animate',function ($animate) {
        return {
            restrict: "A",
            require: '^navigation',
            link: function(scope,element,attrs,navigationCtrl){
                scope.$watch(attrs.containerPerspective,function(newVal){
                    if (!newVal){
                        $animate.addClass(element,'hideMenu');
                        element.bind('click',navigationCtrl.hideMenu);
                    } else {
                        $animate.removeClass(element,'hideMenu');
                        element.unbind('click');
                    }
                });
            }
        }
    }]);

angular.module('gdgsiteApp')
    .directive('menuPerspective', ['$animate',function ($animate) {
        return {
            restrict: "A",
            link: function(scope,element,attrs){
                scope.$watch(attrs.menuPerspective,function(newVal){
                    if (newVal){
                        $animate.addClass(element,'menuShow');
                    } else {
                        $animate.removeClass(element,'menuShow');
                    }
                });
            }
        }
    }]);

angular.module('gdgsiteApp')
    .animation('.hideMenu',function(){
        var parent = null;
        return {
            addClass: function(element){
                if(!parent) parent = angular.element(element.parent());
                parent.addClass('modalView');
                TweenMax.to(element,1,{x:"1100%",z:"-2000px",rotationY:-45});
            },
            removeClass: function(element){
                if(!parent) parent = angular.element(element.parent());
                var callback = function(){
                    parent.removeClass('modalView');
                };
                TweenMax.to(element,1,{x:0,z:0,rotationY:0,onComplete:callback});
            }
        }
    });

angular.module('gdgsiteApp')
    .animation('.menuShow',function(){
        var children = null;
        var timeline;
        return {
            addClass: function(element){
                if(!children) children = element.children();
                timeline = new TimelineLite();
                for (var i = 0; i < children.length; i++){
                    timeline.fromTo(angular.element(children[i]),0.1,{x:-50,opacity:0},{x:0,opacity:1})
                }
                timeline.play()
            },
            removeClass: function(){
                timeline.restart();
                timeline.pause();
            }
        }
    });
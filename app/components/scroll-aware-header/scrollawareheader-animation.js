(function () {

    'use strict';
    var app = angular.module('gdgApp.scrollAwareHeader');

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
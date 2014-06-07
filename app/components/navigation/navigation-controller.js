(function(){
    var app = angular.module('gdgApp.navigation');

    app.controller('NavigationCtrl',['$scope', function ($scope) {
        $scope.menu = {visible: false};
        $scope.toggleMenu = function () {
            $scope.menu.visible = !$scope.menu.visible;
        };
        this.hideMenu = function () {
            $scope.menu.visible = false;
        };
        $scope.links = [
            {
                url: '#/',
                name: 'Home'
            },
            {
                url: '#/blog',
                name: 'Blog'
            },
            {
                url: '#/events',
                name: 'Events'
            },
            {
                url: '#/who-we-are',
                name: 'Who we are'
            }
        ];
    }]);

})();
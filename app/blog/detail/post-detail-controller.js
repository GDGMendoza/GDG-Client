(function () {

    'use strict';
    var app = angular.module('gdgApp.blog');

    app.controller('PostDetailCtrl', ['$scope', '$routeParams', 'PostService', 'ContributorService',
        function ($scope, $routeParams, PostService, ContributorService) {
            $scope.currentPost = PostService.postList[$routeParams.uniqueTitle];
            $scope.contributorList = ContributorService.contributorList;
        }
    ]);

})();
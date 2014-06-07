(function () {

    'use strict';
    var app = angular.module('gdgApp.blog');

    app.controller('PostListCtrl', ['$scope', '$window', 'PostService', 'ContributorService',
        function ($scope, $window, PostService, ContributorService) {
            $scope.contributorList = ContributorService.contributorList;
            $scope.postList = PostService.postList;

            $scope.getPostTemplate = function (index) {
                if ($window.innerWidth <= 640 || index % 4 === 0) {
                    return 'views/blog/preview/big.html'
                } else {
                    return 'views/blog/preview/tiny.html'
                }
            }
        }
    ]);

})();
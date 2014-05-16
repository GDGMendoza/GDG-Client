'use strict';

angular.module('gdgsiteApp')
    .controller('BlogCtrl', ['$scope', '$window', 'PostService', 'ContributorService', function ($scope, $window, PostService, ContributorService) {

        var blogCtrl = this;
        blogCtrl.contributorList = ContributorService.contributorList;
        blogCtrl.postList = PostService.postList;

        blogCtrl.getPostTemplate = function (index) {
            if ($window.innerWidth <= 640 || index % 4 === 0) {
                return 'views/blog/preview/big.html'
            } else {
                return 'views/blog/preview/tiny.html'
            }
        }

    }]);

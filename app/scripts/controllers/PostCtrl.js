'use strict';

angular.module('gdgsiteApp')
    .controller('PostCtrl', ['$scope', '$routeParams', 'PostService', 'ContributorService', function ($scope, $routeParams, PostService, ContributorService) {

        var postCtrl = this;
        postCtrl.currentPost = PostService.postList[$routeParams.uniqueTitle];
        postCtrl.contributorList = ContributorService.contributorList;

    }]);

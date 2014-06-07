(function () {

    'use strict';
    var app = angular.module('gdgApp.blog', ['ngRoute', 'gdgApp.backend', 'gdgApp.wwa']);

    var config = {
        promises: {
            postListPromise: ['$q', 'PostService', function ($q, PostService) {
                var defer = $q.defer();
                if (angular.equals({}, PostService.postList)) {
                    PostService.findMorePosts().then(defer.resolve, defer.reject);
                } else defer.resolve();
                return defer.promise;
            }],
            postDetailPromise: ['$q', '$route', 'PostService', function ($q, $route, PostService) {
                var defer = $q.defer();
                var uniqueTitle = $route.current.params.uniqueTitle;
                if (!PostService.postList[uniqueTitle]) {
                    PostService.findPostByUniqueTitle(uniqueTitle).then(defer.resolve, defer.reject);
                } else defer.resolve();
                return defer.promise;
            }]
        }
    };
    app.constant('blogConfig', config);

    app.config(['$routeProvider', 'blogConfig', 'wwaConfig', function ($routeProvider, blogConfig, wwaConfig) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/list/post-list.html',
            controller: 'PostListCtrl',
            resolve: {
                contributorListPromise: wwaConfig.promises.contributorListPromise,
                postListPromise: blogConfig.promises.postListPromise
            }
        });
        $routeProvider.when('/blog/:uniqueTitle', {
            templateUrl: 'blog/detail/post-detail.html',
            controller: 'PostDetailCtrl',
            resolve: {
                contributorListPromise: wwaConfig.promises.contributorListPromise,
                postPromise: blogConfig.promises.postDetailPromise
            }
        });
    }]);

})();
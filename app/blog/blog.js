(function () {

    'use strict';
    var app = angular.module('gdgApp.blog', ['ngRoute', 'gdgApp.backend', 'gdgApp.promises']);

    var config = {
        promises: {
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

    app.config(['$routeProvider', 'promisesConfig', 'blogConfig', function ($routeProvider, promisesConfig, blogConfig) {
        $routeProvider.when('/blog', {
            templateUrl: 'blog/list/post-list.html',
            controller: 'PostListCtrl',
            resolve: {
                contributorListPromise: promisesConfig.contributorListPromise,
                postListPromise: promisesConfig.postListPromise
            }
        });
        $routeProvider.when('/blog/:uniqueTitle', {
            templateUrl: 'blog/detail/post-detail.html',
            controller: 'PostDetailCtrl',
            resolve: {
                contributorListPromise: promisesConfig.contributorListPromise,
                postPromise: blogConfig.promises.postDetailPromise
            }
        });
    }]);

})();
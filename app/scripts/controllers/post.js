'use strict';

angular.module('gdgsiteApp').controller('PostCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {


    var postController = this;
    var i = $routeParams.id;
    postController.post = {
        id: i.toString(),
        author: "Google User",
        title: "title"+i,
        dashedTitle: "dashedTitle"+i,
        cover: "cover"+i,
        tags: [
            {_id: "", name: "tag"+i}
        ],
        content: "content"+i,
        comments: [
            {author: "Comment user", contenido: "contenido"+i, createdAt: "24-02-1991", modifiedAt: "24-02-1991"}
        ],
        createdAt: "24-02-1991",
        modifiedAt: "24-02-1991"
    };
    $scope.post = postController;
}]);

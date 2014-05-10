'use strict';

angular.module('gdgsiteApp')
    .controller('BlogCtrl', ['$scope', function ($scope) {

        var blogController = this;
        blogController.postList = [];
        for(var i = 0; i < 10; i++){
            blogController.postList.push({
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
            });
        }

        blogController.getPostTemplate = function(index){
            if(index % 4 === 0){
                return 'views/postPreviewBigComponent.html'
            } else {
                return 'views/postPreviewTinyComponent.html'
            }
        }

    }]);

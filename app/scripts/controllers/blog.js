'use strict';

angular.module('gdgsiteApp')
    .controller('BlogCtrl', ['$scope','$window', function ($scope,$window) {

        var blogController = this;
        blogController.postList = [];
        for(var i = 0; i < 10; i++){
            blogController.postList.push({
                id: i.toString(),
                author: {
                    photo:"asdasd",
                    name:"Esteban Falso"
                },
                title: "title"+i,
                dashedTitle: "dashedTitle"+i,
                cover: "images/home-img.jpg",
                tags: [
                    {_id: "", name: "tag"+i}
                ],
                content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias assumenda aut consequatur corporis cum cupiditate debitis eius illum incidunt laborum minima molestias neque officiis porro, possimus quam quos reprehenderit sequi similique sint temporibus vel vitae? At dolore doloribus non!"+i,
                comments: [
                    {author: "Comment user", contenido: "contenido"+i, createdAt: "24-02-1991", modifiedAt: "24-02-1991"}
                ],
                createdAt: "24-02-1991",
                modifiedAt: "24-02-1991"
            });
        }

        blogController.getPostTemplate = function(index){
            if($window.innerWidth <= 640 || index % 4 === 0){
                return 'views/blog/preview/big.html'
            } else {
                return 'views/blog/preview/tiny.html'
            }
        }

    }]);

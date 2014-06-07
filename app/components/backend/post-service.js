(function () {

    'use strict';
    var app = angular.module('gdgApp.backend');

    app.factory('PostService', ['$http', 'backendConfig',
        function ($http, backendConfig) {
            var publicInterface = {};
            publicInterface.postList = {
                "aprendiendo-angularjs": {"author": "536fc7754e273cb21097fb1a", "title": "Aprendiendo AngularJS", "uniqueTitle": "aprendiendo-angularjs", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "5370031597d4f6c6237990e4", "modifiedAt": "2014-05-11T23:09:09.020Z", "createdAt": "2014-05-11T23:09:09.020Z",
                    "tags": [
                        {"name": "AngularJS", "_id": "536fffa0c325bb5a23477311"}
                    ]
                },
                "aprendiendo-nodejs": {"author": "536fc7754e273cb21097fb1a", "title": "Aprendiendo NodeJS", "uniqueTitle": "aprendiendo-nodejs", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "5370033197d4f6c6237990e5", "modifiedAt": "2014-05-11T23:09:37.915Z", "createdAt": "2014-05-11T23:09:37.915Z",
                    "tags": [
                        {"name": "NodeJS", "_id": "536fffa8c325bb5a23477312"}
                    ]
                },
                "aprendiendo-mongodb": {"author": "536fcf2165cb0e1a130200d6", "title": "Aprendiendo MongoDB", "uniqueTitle": "aprendiendo-mongodb", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "5370034997d4f6c6237990e6", "modifiedAt": "2014-05-11T23:10:01.631Z", "createdAt": "2014-05-11T23:10:01.630Z",
                    "tags": [
                        {"name": "MongoDB", "_id": "536fffadc325bb5a23477313"}
                    ]
                },
                "aprendiendo-expressjs": {"author": "536fcf2165cb0e1a130200d6", "title": "Aprendiendo ExpressJS", "uniqueTitle": "aprendiendo-expressjs", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "5370035b97d4f6c6237990e7", "modifiedAt": "2014-05-11T23:10:19.433Z", "createdAt": "2014-05-11T23:10:19.433Z",
                    "tags": [
                        {"name": "ExpressJS", "_id": "536fffb3c325bb5a23477314"}
                    ]
                },
                "aprendiendo-mean-stack": {"author": "536fc7754e273cb21097fb1a", "title": "Aprendiendo MEAN stack", "uniqueTitle": "aprendiendo-mean-stack", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "5370038797d4f6c6237990e8", "modifiedAt": "2014-05-11T23:11:03.114Z", "createdAt": "2014-05-11T23:11:03.114Z",
                    "tags": [
                        {"name": "AngularJS", "_id": "536fffa0c325bb5a23477311"},
                        {"name": "NodeJS", "_id": "536fffa8c325bb5a23477312"},
                        {"name": "MongoDB", "_id": "536fffadc325bb5a23477313"},
                        {"name": "ExpressJS", "_id": "536fffb3c325bb5a23477314"}
                    ]
                },
                "aprendiendo-angularjs-parte-2": {"author": "536fcf2165cb0e1a130200d6", "title": "Aprendiendo AngularJS parte 2", "uniqueTitle": "aprendiendo-angularjs-parte-2", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "537003dd97d4f6c6237990e9", "modifiedAt": "2014-05-11T23:12:29.540Z", "createdAt": "2014-05-11T23:12:29.540Z",
                    "tags": [
                        {"name": "AngularJS", "_id": "536fffa0c325bb5a23477311"}
                    ]
                },
                "aprendiendo-angularjs-parte-3": {"author": "536fcf2165cb0e1a130200d6", "title": "Aprendiendo AngularJS parte 3", "uniqueTitle": "aprendiendo-angularjs-parte-3", "cover": "img/default.gif", "content": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat. Nunc vehicula dapibus ipsum. Duis venenatis risus non nunc fermentum dapibus. Morbi lorem ante, malesuada in mollis nec, auctor nec massa. Aenean tempus dui eget felis blandit at fringilla urna ultrices. Suspendisse feugiat, ante et viverra lacinia, lectus sem lobortis dui, ultricies consectetur leo mauris at tortor. Nunc et tortor sit amet orci consequat semper. Nulla non fringilla diam.", "_id": "537003e397d4f6c6237990ea", "modifiedAt": "2014-05-11T23:12:35.523Z", "createdAt": "2014-05-11T23:12:35.523Z",
                    "tags": [
                        {"name": "AngularJS", "_id": "536fffa0c325bb5a23477311"}
                    ]
                }
            };

            var nextPage = 1;
            publicInterface.findMorePosts = function () {
                var params = "?page=" + nextPage;
                return $http.get(backendConfig.basePath + "/posts" + params).then(function (response) {
                    angular.extend(publicInterface.postList, response.data);
                    nextPage++;
                }, function (response) {
                    console.error(response.status + ": " + JSON.stringify(response.data));
                });
            };

            publicInterface.findPostByUniqueTitle = function (uniqueTitle) {
                return $http.get(backendConfig.basePath + "/posts/" + uniqueTitle).then(function (response) {
                    angular.extend(publicInterface.postList, response.data);
                }, function (response) {
                    console.error(response.status + ": " + JSON.stringify(response.data));
                });
            };

            return publicInterface;
        }
    ]);

})();
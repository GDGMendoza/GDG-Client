(function () {

    'use strict';
    var app = angular.module('gdgApp.backend');

    app.factory('EventService', ['$http', 'backendConfig',
        function ($http, backendConfig) {
            var publicInterface = {};
            publicInterface.eventList = {
                "evento-mean-stack-2": {"title": "Evento MEAN stack 2", "uniqueTitle": "evento-mean-stack-2", "cover": "img/default.gif", "description": "MEAN", "difficulty": "Piece of cake", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700a142b02cfdd26029c44", "modifiedAt": "2014-05-11T23:39:00.108Z", "createdAt": "2014-05-11T23:39:00.108Z",
                    "sessions": [
                        {"title": "AngularJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a142b02cfdd26029c49", "modifiedAt": "2014-05-11T23:39:00.111Z", "createdAt": "2014-05-11T23:39:00.111Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa0c325bb5a23477311"]},
                        {"title": "NodeJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a142b02cfdd26029c48", "modifiedAt": "2014-05-11T23:39:00.111Z", "createdAt": "2014-05-11T23:39:00.111Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa8c325bb5a23477312"]},
                        {"title": "MongoDB", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a142b02cfdd26029c47", "modifiedAt": "2014-05-11T23:39:00.111Z", "createdAt": "2014-05-11T23:39:00.111Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffadc325bb5a23477313"]},
                        {"title": "ExpressJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a142b02cfdd26029c46", "modifiedAt": "2014-05-11T23:39:00.110Z", "createdAt": "2014-05-11T23:39:00.110Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffb3c325bb5a23477314"]},
                        {"title": "IntegraciÃ³n en MEAN stack", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a142b02cfdd26029c45", "modifiedAt": "2014-05-11T23:39:00.109Z", "createdAt": "2014-05-11T23:39:00.109Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa0c325bb5a23477311", "536fffa8c325bb5a23477312", "536fffadc325bb5a23477313", "536fffb3c325bb5a23477314"]}
                    ], "location": {"x": 5, "y": 5}
                },
                "evento-angular": {"title": "Evento Angular", "uniqueTitle": "evento-angular", "cover": "img/default.gif", "description": "AngularJS", "difficulty": "101", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700a862b02cfdd26029c4a", "modifiedAt": "2014-05-11T23:40:54.978Z", "createdAt": "2014-05-11T23:40:54.978Z",
                    "sessions": [
                        {"title": "AngularJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700a862b02cfdd26029c4b", "modifiedAt": "2014-05-11T23:40:54.978Z", "createdAt": "2014-05-11T23:40:54.978Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa0c325bb5a23477311"]}
                    ], "location": {"x": 50, "y": 50}
                },
                "evento-nodejs": {"title": "Evento NodeJS", "uniqueTitle": "evento-nodejs", "cover": "img/default.gif", "description": "NodeJS", "difficulty": "102", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700aab2b02cfdd26029c4c", "modifiedAt": "2014-05-11T23:41:31.648Z", "createdAt": "2014-05-11T23:41:31.648Z",
                    "sessions": [
                        {"title": "NodeJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700aab2b02cfdd26029c4d", "modifiedAt": "2014-05-11T23:41:31.649Z", "createdAt": "2014-05-11T23:41:31.649Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa8c325bb5a23477312"]}
                    ], "location": {"x": 30, "y": 30}
                },
                "evento-mongodb": {"title": "Evento MongoDB", "uniqueTitle": "evento-mongodb", "cover": "img/default.gif", "description": "MongoDB", "difficulty": "102", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700ad52b02cfdd26029c4e", "modifiedAt": "2014-05-11T23:42:13.804Z", "createdAt": "2014-05-11T23:42:13.804Z",
                    "sessions": [
                        {"title": "MongoDB", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700ad52b02cfdd26029c4f", "modifiedAt": "2014-05-11T23:42:13.805Z", "createdAt": "2014-05-11T23:42:13.805Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffadc325bb5a23477313"]}
                    ], "location": {"x": 30, "y": 30}
                },
                "evento-express-e-integracion": {"title": "Evento Express e integracion", "uniqueTitle": "evento-express-e-integracion", "cover": "img/default.gif", "description": "ExpressJS e integracion", "difficulty": "201", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700b062b02cfdd26029c50", "modifiedAt": "2014-05-11T23:43:02.079Z", "createdAt": "2014-05-11T23:43:02.079Z",
                    "sessions": [
                        {"title": "ExpressJS", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700b062b02cfdd26029c52", "modifiedAt": "2014-05-11T23:43:02.080Z", "createdAt": "2014-05-11T23:43:02.080Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffb3c325bb5a23477314"]},
                        {"title": "IntegraciÃ³n en MEAN stack", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700b062b02cfdd26029c51", "modifiedAt": "2014-05-11T23:43:02.079Z", "createdAt": "2014-05-11T23:43:02.079Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa0c325bb5a23477311", "536fffa8c325bb5a23477312", "536fffadc325bb5a23477313", "536fffb3c325bb5a23477314"]}
                    ], "location": {"x": 80, "y": 80}
                },
                "evento-integracion": {"title": "Evento ntegracion", "uniqueTitle": "evento-integracion", "cover": "img/default.gif", "description": "Integracion", "difficulty": "301", "eventDate": "2014-05-11T23:09:09.020Z", "googlePlusAlbum": "", "_id": "53700b302b02cfdd26029c53", "modifiedAt": "2014-05-11T23:43:44.789Z", "createdAt": "2014-05-11T23:43:44.788Z",
                    "sessions": [
                        {"title": "IntegraciÃ³n en MEAN stack", "description": "Proin ut quam eros. Donec sed lobortis diam. Nulla nec odio lacus. Quisque porttitor egestas dolor in placerat.", "_id": "53700b302b02cfdd26029c54", "modifiedAt": "2014-05-11T23:43:44.789Z", "createdAt": "2014-05-11T23:43:44.789Z", "demoLink": [], "videoLinks": [], "githubLinks": [], "speakers": ["536fc7754e273cb21097fb1a", "536fcf2165cb0e1a130200d6"], "tags": ["536fffa0c325bb5a23477311", "536fffa8c325bb5a23477312", "536fffadc325bb5a23477313", "536fffb3c325bb5a23477314"]}
                    ], "location": {"x": 90, "y": 90}
                }
            };

            var nextPage = 1;
            publicInterface.findMoreEvents = function () {
                var params = "?page=" + nextPage;
                return $http.get(backendConfig.basePath + "/events" + params).then(function (response) {
                    angular.extend(publicInterface.eventList, response.data);
                    nextPage++;
                }, function (response) {
                    console.error(response.status + ": " + JSON.stringify(response.data));
                });
            };

            publicInterface.findEventByUniqueTitle = function (uniqueTitle) {
                return $http.get(backendConfig.basePath + "/events/" + uniqueTitle).then(function (response) {
                    angular.extend(publicInterface.eventList, response.data);
                }, function (response) {
                    console.error(response.status + ": " + JSON.stringify(response.data));
                });
            };

            return publicInterface;
        }
    ]);

})();
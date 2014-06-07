(function () {

    'use strict';
    var app = angular.module('gdgApp.backend');

    app.factory('ContributorService', ['$http', 'backendConfig',
        function ($http, backendConfig) {
            var publicInterface = {};
            publicInterface.contributorList = {"536fc7754e273cb21097fb1a": {"_id": "536fc7754e273cb21097fb1a", "company": "GDG Mendoza", "email": "heberlopez@gmail.com", "facebook": "https://www.facebook.com/heberlopez", "googlePlus": "https://plus.google.com/+HeberLopez", "name": "Heber López", "photo": "https://lh4.googleusercontent.com/-QRlMfKoShS8/T9UAxvRxymI/AAAAAAAABaQ/wl7W-N9NSiw/s566-no/IMG_8741.JPG", "title": "GDG Lead organizer", "twitter": "https://twitter.com/HeberLZ"}, "536fcf2165cb0e1a130200d6": {"_id": "536fcf2165cb0e1a130200d6", "company": "GDG Mendoza", "email": "her.magrini@gmail.com", "facebook": "https://www.facebook.com/Her.Magrini", "googlePlus": "https://plus.google.com/117054261306853104149", "name": "Hernán Magrini", "photo": "https://lh3.googleusercontent.com/-x3Evmy2fvvg/T3zxf6KQj5I/AAAAAAAABe0/0LTqoPYgNBI/s566-no/20120331_184842.jpg", "title": "GDG Lead organizer", "twitter": "https://twitter.com/HerMagrini"}}

            publicInterface.findAllContributors = function () {
                return $http.get(backendConfig.basePath + "/contributors").then(function (response) {
                    publicInterface.contributorList = response.data;
                }, function (response) {
                    console.error(response.status + ": " + JSON.stringify(response.data));
                });
            };

            return publicInterface;
        }
    ]);

})();
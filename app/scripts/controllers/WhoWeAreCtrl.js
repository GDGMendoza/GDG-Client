'use strict';

angular.module('gdgsiteApp').controller("WhoWeAreCtrl", ['$scope', 'ContributorService', function ($scope, ContributorService) {

    var wwaCtrl = this;
    wwaCtrl.contributorList = ContributorService.contributorList;

}]);

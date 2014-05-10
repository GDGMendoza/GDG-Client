'use strict';

angular.module('gdgsiteApp')
  .controller('HomeCtrl', function ($scope) {
    var home = this;
    home.links = [{
        url: '#/',
        name: 'Home'
    },{
        url: '#/blog',
        name: 'Blog'
    },{
        url: '#/',
        name: 'Who we are'
    }];
  });

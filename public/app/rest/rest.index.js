(function () {
  'use strict'
  angular.module('json.monster')

    .config( function( $stateProvider ) {

      $stateProvider
        .state('create-project', {
          url: "/create-project",
          controller:'createProjectController',
          controllerAs: 'cp',
          authenticate: true,
          templateUrl: "app/rest/create-project.html"
        })
        .state('my-rests', {
          url: "/my-rests",
          controller:'myRestsController',
          controllerAs: 'rests',
          authenticate: true,
          templateUrl: "app/rest/my-rests.html"
        })
    })

    .controller('createProjectController', require('./create-project.controller'))

    .controller('myRestsController', require('./my-rests.controller'))


})();
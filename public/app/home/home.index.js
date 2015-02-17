import HomeController from './home.controller.js';

angular.module(require('../config').appName)

  .config(( $stateProvider, $urlRouterProvider ) => {

    $urlRouterProvider.otherwise("/");

    $stateProvider.state('app', {
      abstract: true,
      views   : {
        nav: {
          templateUrl: 'app/nav/nav.tpl.html',
          controller : 'NavController as Nav'
        },

        '': {
          templateUrl: 'app/content.html'
        },

        footer: {
          templateUrl: 'app/footer/footer.tpl.html'
        }

      }
    }).state('app.home', {
      url        : '/',
      templateUrl: 'app/home/home.tpl.html',
      controller : 'HomeController as Home'
    })

  })

  .controller('HomeController', HomeController);





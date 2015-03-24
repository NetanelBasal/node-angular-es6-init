export default ( $stateProvider, $urlRouterProvider ) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url        : '/',
      templateUrl: 'app/home/home.tpl.html'
    });

}
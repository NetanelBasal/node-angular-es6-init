export default ( $stateProvider, $urlRouterProvider ) => {

  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('home', {
      url        : '/',
      template: '<home></home>'
    });

}
/*@ngInject*/
function runPhase( $rootScope, UserService, $state ) {

  UserService.authUser = window.user || null;

  $rootScope.UserService = UserService;

  $rootScope.$on("$stateChangeStart", function( event, toState ) {

    if( toState.authenticate && !UserService.authUser ) {
      event.preventDefault();
      $state.go("home");
    }

  });

  $rootScope.$on('$stateChangeError', function( event, toState, toParams, fromState, fromParams, error ) {
    console.log(error);
  });

  $rootScope.$on('$stateChangeSuccess', function() {

  })
}

export default runPhase;
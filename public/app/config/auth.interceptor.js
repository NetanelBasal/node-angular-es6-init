// @ngInject
function authInterceptor( UserService, $injector ) {
  return {
    request: function( $config ) {

      if( UserService.authUser ) {
        $config.headers['Authorization'] = UserService.authUser.token;
      }

      return $config;
    },

    responseError: function( rejection ) {

      return rejection;
    }
  }
}

export default authInterceptor;
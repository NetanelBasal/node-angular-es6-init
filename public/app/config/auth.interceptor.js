// @ngInject
function authInterceptor( UserService, $injector ) {
  return {
    request: function( $config ) {


      return $config;
    },

    responseError: function( rejection ) {
      if( rejection.status === 400 ) {



      }
      return rejection;
    }
  }
}

export default authInterceptor;
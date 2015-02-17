// @ngInject
function config( $httpProvider, $sceProvider ) {

  $httpProvider.interceptors.push('authInterceptor');

  $sceProvider.enabled(false);

}

export default config;
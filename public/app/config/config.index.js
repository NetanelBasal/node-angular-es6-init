// @ngInject
function config( $httpProvider, $helloProvider ) {

  $helloProvider.setProviders({
      google  : '94588562106-pmpfft86rrpbik52oku8g6q7ipotuti1.apps.googleusercontent.com',
      facebook: '357618721101537'
    },
    { redirect_uri: 'http://localhost:3000' });

  $httpProvider.interceptors.push('authInterceptor');

}

export default config;
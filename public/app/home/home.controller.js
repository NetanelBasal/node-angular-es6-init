/**
 * HomeController
 */
class HomeController {
  // @ngInject
  constructor( $modal, $socket, $window, AuthService, $http ) {
    this.$modal = $modal;
    this.$http = $http;
    this.$window = $window;
    this.$socket = $socket;
    this.AuthService = AuthService;
    this.user = {};
    this.pepoles = [{ name: 'avi' }, { name: 'netanel' }];
    this.$socket.on('addPepole', ( data ) => this.pepoles.push(data));
  }

  getMsg() {
    this.$socket.emit('addPepole', { name: 'more man' });
  }

  register() {
    this.AuthService.register(this.user).then(( res ) => {
      console.log(res);
    });
  }

  login() {
    this.AuthService.login(this.userLogin).then(( res ) => {
      this.AuthService.saveUserToken(res.data);
    });
  }

  logout() {
    this.AuthService.deleteUserToken();
  }

  profile() {
    this.$http.get('/profile').then(( res ) => {
      console.log(res);
    }).catch(function( err ) {
      console.log(err);
    })
  }

  auth() {
    this.AuthService.providerLogin('facebook').then(() => {
      console.log('success');
    });

  }

  google() {
    this.AuthService.providerLogin('google').then(() => {
      console.log('success');
    });
  }

}

export default HomeController
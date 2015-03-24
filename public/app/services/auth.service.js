/**
 * Auth Service
 */
class AuthService {
  // @ngInject
  constructor( $http, UserService, store, $q, $hello ) {
    this.$http = $http;
    this.store = store;
    this.$hello = $hello;
    this.$q = $q;
    this.UserService = UserService;
  }

  /**
   *
   * @param cred
   * @returns {HttpPromise}
   */
    login( cred ) {
    return this.$http.post('auth/login', cred);
  }

  /**
   *
   * @param user
   * @returns {HttpPromise}
   */
    register( user ) {
    return this.$http.post('auth/register', user);
  }

  /**
   *
   * @param providerName
   * @param user
   * @returns {*}
   */
    providerLogin( providerName ) {
    let defferd = this.$q.defer();
    this.providerAuth(providerName).then(( json ) => {
      this.$http.post("/auth/" + providerName, json).then(( res ) => {
        this.saveUserToken(res.data);
        return defferd.resolve('Auth successfull');
      }).catch(( err ) => {
        return defferd.reject(err);
      });
    });
    return defferd.promise;

  }

  /**
   *
   * @param providerName
   * @returns {*}
   */
    providerAuth( providerName ) {
    let defferd = this.$q.defer();
    this.$hello.login(providerName,{ scope: 'email' }).then(() => {
      return true;
    }).then(() => {
      this.$hello.api(providerName, 'me').then(( json ) => {
        defferd.resolve(json);
      });
    }).catch(( err ) => {
      defferd.reject(err);
    });
    return defferd.promise;

  }

  /**
   *
   * @param user
   */
    saveUserToken( user ) {
    this.UserService.authUser = user;
    this.store.set('oAuth', user);
  }

  /**
   *
   * @returns {*}
   */
    getUserToken() {
    return this.store.get('oAuth');
  }

  /**
   *
   * @returns {*}
   */
    deleteUserToken() {
    this.UserService.authUser = null;
    return this.store.remove('oAuth');
  }

}

export default AuthService



/**
 * Auth Service
 */
class AuthService {
  // @ngInject
  constructor( $http, UserService ) {
    this.$http = $http;
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
   * @returns {HttpPromise}
   */
    logout() {
    this.UserService.authUser = null;
    return this.$http.post('auth/logout', {});
  }
}

export default AuthService



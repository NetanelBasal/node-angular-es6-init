// @ngInject
function authService( $http , userService) {

  /**
   *
   * @param cred
   * @returns {HttpPromise}
   */
  this.login = function( cred ) {
    return $http.post('auth/login', cred);
  }

  /**
   *
   * @param user
   * @returns {HttpPromise}
   */
  this.register = function( user ) {
    return $http.post('auth/register', user);
  }

  /**
   *
   * @returns {HttpPromise}
   */
  this.logout = function() {
    userService.authUser = null;
    return $http.post('auth/logout', {});
  }

}

module.exports = authService;


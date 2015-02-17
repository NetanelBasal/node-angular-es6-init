/**
 * NavController
 */
class NavController {
  // @ngInject
  /**
   *
   * @param AuthService
   */
    constructor( AuthService ) {
    this.AuthService = AuthService;
    this.view = 'nav-view';
  }

  logOut() {
    this.AuthService.logout();
  }

}

export default NavController




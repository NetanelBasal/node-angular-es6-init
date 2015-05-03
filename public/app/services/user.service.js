/**
 * UserService
 */
class UserService {
  // @ngInject
  constructor(store ) {
    this.authUser = store.get('oAuth');
  }


}

export default UserService
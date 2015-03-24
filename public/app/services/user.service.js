/**
 * UserService
 */
class UserService {
  // @ngInject
  constructor(store ) {
    this.authUser = store.get('oAuth') || null;
  }


}

export default UserService
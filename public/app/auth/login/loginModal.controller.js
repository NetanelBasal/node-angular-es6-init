/**
 * LoginModalController
 */
class LoginModalController {
  // @ngInject
  constructor( $modalInstance ) {
    this.$modalInstance = $modalInstance;
  }

  close() {
    this.$modalInstance.dismiss('cancel');
  }

  onSuccess() {
    this.$modalInstance.close();
  }

}

export default LoginModalController

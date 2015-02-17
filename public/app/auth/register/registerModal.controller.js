/**
 * RegisterModalController
 */
class RegisterModalController {
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

export default RegisterModalController

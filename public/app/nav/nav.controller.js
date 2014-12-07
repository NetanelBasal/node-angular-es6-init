// @ngInject
function navController( $scope, $modal , authService) {

  this.openLoginModal = function() {
    var modal = openModal('login');
  }

  this.openRegisterModal = function() {
    openModal('register');
  }

  this.logOut = function() {
    authService.logout();
  }


  function openModal(type) {

    var view        = 'app/auth/' + type + '/' + type + 'Modal.html',
        controller = type + 'ModalController'

    var typeModal = $modal.open({
      templateUrl: view,
      controller: controller,
      size: 'sm'
    });

    return typeModal;
  }

}

module.exports = navController;
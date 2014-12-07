// @ngInject
function HomeController( $scope , $modal) {

  var home = this;

  this.openLoginModal = function() {
    var modal = openModal('login');
  }

  this.openRegisterModal = function() {
    openModal('register');
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

module.exports = HomeController;
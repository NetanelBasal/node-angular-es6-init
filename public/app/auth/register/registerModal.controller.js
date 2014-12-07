// @ngInject
function registerModalController( $scope, $modalInstance ) {

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  }

  $scope.onSuccess = function() {
    $modalInstance.dismiss('cancel');
  }

}

module.exports = registerModalController;
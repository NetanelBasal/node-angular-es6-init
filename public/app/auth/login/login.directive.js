// @ngInject
function login( $sessionStorage, userService ) {
  return {
    restrict   : 'AE',
    templateUrl: 'app/auth/login/login.tpl.html',
    scope      : {
      onSuccess: '='
    },
    controller : controller
  }

  // @ngInject
  function controller( $scope, authService ) {

    $scope.login = function() {

      if( $scope.loginForm.$valid ) {
        authService
          .login($scope.user).then(function( res ) {
            if( ! res ) {
              toastr.error('Somthing wrong');
              return;
            } else {
              userService.authUser = res.data;
              $scope.onSuccess();
            }
          })
      }
    }
  }
}

module.exports = login;
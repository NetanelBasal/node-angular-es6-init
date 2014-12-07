// @ngInject
function register() {
  return {
    restrict   : 'AE',
    templateUrl: 'app/auth/register/register.tpl.html',
    scope      : {
      onSuccess: '='
    },
    controller : controller
  }

  // @ngInject
  function controller( $scope, authService , userService) {

    $scope.register = function() {
      if( $scope.registerForm.$valid ) {

        authService
          .register($scope.user)
          .then(function() {
            var user = {email: $scope.user.email, password: $scope.user.password};
            authService.login(user)
              .then(function(res) {
                userService.authUser = res.data;
                $scope.onSuccess();
              });
          })
          .catch(function() {
            $scope.error = true;
          })

      }
    }
  }
}

module.exports = register;
// @ngInject
function registerDire() {
  return {
    restrict        : 'AE',
    templateUrl     : 'app/auth/register/register.tpl.html',
    bindToController: true,
    scope           : {
      onSuccess: '='
    },
    controller      : controller
  }

  // @ngInject
  function controller( AuthService, UserService ) {

    this.register = function() {
      if( this.registerForm.$valid ) {

        AuthService
          .register(this.user)
          .then(function() {
            var user = { email: this.user.email, password: this.user.password };
            AuthService.login(user)
              .then(function( res ) {
                UserService.authUser = res.data;
                this.onSuccess();
              });
          })
          .catch(function() {
            this.error = true;
          })

      }
    }
  }
}

export default registerDire;
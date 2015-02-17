// @ngInject
function loginDire( UserService ) {
  return {
    restrict        : 'AE',
    templateUrl     : 'app/auth/login/login.tpl.html',
    bindToController: true,
    scope           : {
      onSuccess: '='
    },
    controller      : controller
  }

  // @ngInject
  function controller( AuthService ) {

    this.login = function() {

      if( this.loginForm.$valid ) {
        AuthService
          .login(this.user).then(function( res ) {
            if( !res ) {
              toastr.error('Somthing wrong');
              return;
            } else {
              UserService.authUser = res.data;
              this.onSuccess();
            }
          })
      }
    }
  }
}

export default loginDire;
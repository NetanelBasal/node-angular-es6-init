angular.module('auth.local', [])

  .config(( $stateProvider ) => {

    $stateProvider
      .state('app.login', {
        url        : "/auth/login",
        controller : 'LoginController as Login',
        templateUrl: "app/auth/login/login.html"
      })
      .state('app.register', {
        url        : "/auth/register",
        controller : 'RegisterController as Register',
        templateUrl: "app/auth/register/register.html"
      })
  })

  .controller('LoginController', require('./login/login.controller'))

  .controller('RegisterController', require('./register/register.controller'))

  .controller('RegisterModalController', require('./register/registerModal.controller'))

  .controller('LoginModalController', require('./login/loginModal.controller'))

  .directive('register', require('./register/register.directive'))

  .directive('login', require('./login/login.directive'))

  .directive('validEmail', require('./register/email-validation.directive'));


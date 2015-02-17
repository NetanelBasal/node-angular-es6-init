(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function () {
  "use strict";
  var modules = require("./modules");

  require("./common/field-match.module");

  require("./common/spinner-btn/spinner.btn.module");

  require("./common/password.chars.validator");

  require("./common/wait-me");

  /************************** APP internal modules **********************/

  require("./services/services.index");

  angular.module("mb.monster", modules).config(require("./config/config.index")).factory("authInterceptor", require("./config/auth.interceptor")).run(require("./config/run.phase.js"));

  require("./home/home.index");

  require("./auth/auth.index");

  require("./nav/nav.index");
})();

},{"./auth/auth.index":2,"./common/field-match.module":10,"./common/password.chars.validator":11,"./common/spinner-btn/spinner.btn.module":13,"./common/wait-me":14,"./config/auth.interceptor":16,"./config/config.index":17,"./config/run.phase.js":18,"./home/home.index":20,"./modules":21,"./nav/nav.index":23,"./services/services.index":25}],2:[function(require,module,exports){
"use strict";

angular.module("auth.local", []).config(["$stateProvider", function ($stateProvider) {
  $stateProvider.state("app.login", {
    url: "/auth/login",
    controller: "LoginController as Login",
    templateUrl: "app/auth/login/login.html"
  }).state("app.register", {
    url: "/auth/register",
    controller: "RegisterController as Register",
    templateUrl: "app/auth/register/register.html"
  });
}]).controller("LoginController", require("./login/login.controller")).controller("RegisterController", require("./register/register.controller")).controller("RegisterModalController", require("./register/registerModal.controller")).controller("LoginModalController", require("./login/loginModal.controller")).directive("register", require("./register/register.directive")).directive("login", require("./login/login.directive")).directive("validEmail", require("./register/email-validation.directive"));

},{"./login/login.controller":3,"./login/login.directive":4,"./login/loginModal.controller":5,"./register/email-validation.directive":6,"./register/register.controller":7,"./register/register.directive":8,"./register/registerModal.controller":9}],3:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * LoginController
 */
var LoginController = (function () {
  // @ngInject
  function LoginController() {
    _classCallCheck(this, LoginController);
  }

  _prototypeProperties(LoginController, null, {
    onSuccess: {
      value: function onSuccess() {},
      writable: true,
      configurable: true
    }
  });

  return LoginController;
})();

module.exports = LoginController;

},{}],4:[function(require,module,exports){
"use strict";

// @ngInject
function loginDire(UserService) {
  controller.$inject = ["AuthService"];
  return {
    restrict: "AE",
    templateUrl: "app/auth/login/login.tpl.html",
    bindToController: true,
    scope: {
      onSuccess: "="
    },
    controller: controller
  };

  // @ngInject
  function controller(AuthService) {
    this.login = function () {
      if (this.loginForm.$valid) {
        AuthService.login(this.user).then(function (res) {
          if (!res) {
            toastr.error("Somthing wrong");
            return;
          } else {
            UserService.authUser = res.data;
            this.onSuccess();
          }
        });
      }
    };
  }
}
loginDire.$inject = ["UserService"];

module.exports = loginDire;

},{}],5:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * LoginModalController
 */
var LoginModalController = (function () {
  // @ngInject
  function LoginModalController($modalInstance) {
    _classCallCheck(this, LoginModalController);

    this.$modalInstance = $modalInstance;
  }
  LoginModalController.$inject = ["$modalInstance"];

  _prototypeProperties(LoginModalController, null, {
    close: {
      value: function close() {
        this.$modalInstance.dismiss("cancel");
      },
      writable: true,
      configurable: true
    },
    onSuccess: {
      value: function onSuccess() {
        this.$modalInstance.close();
      },
      writable: true,
      configurable: true
    }
  });

  return LoginModalController;
})();

module.exports = LoginModalController;

},{}],6:[function(require,module,exports){
"use strict";

// @ngInject
function validEmail() {
  return {
    restrict: "A",
    require: "ngModel",
    link: link
  };
  function link($scope, elem, attrs, ngModel) {
    ngModel.$validators.validEmail = function (modelValue) {
      var emailRegex = new RegExp("^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@(?:[a-zA-Z0-9-]+.)+[a-zA-Z]{2,4})$");
      return emailRegex.test(modelValue);
    };
  }
}


module.exports = validEmail;

},{}],7:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * RegisterController
 */
var RegisterController = (function () {
  // @ngInject
  function RegisterController() {
    _classCallCheck(this, RegisterController);
  }

  _prototypeProperties(RegisterController, null, {
    onSuccess: {
      value: function onSuccess() {},
      writable: true,
      configurable: true
    }
  });

  return RegisterController;
})();

module.exports = RegisterController;

},{}],8:[function(require,module,exports){
"use strict";

// @ngInject
function registerDire() {
  controller.$inject = ["AuthService", "UserService"];
  return {
    restrict: "AE",
    templateUrl: "app/auth/register/register.tpl.html",
    bindToController: true,
    scope: {
      onSuccess: "="
    },
    controller: controller
  };

  // @ngInject
  function controller(AuthService, UserService) {
    this.register = function () {
      if (this.registerForm.$valid) {
        AuthService.register(this.user).then(function () {
          var user = { email: this.user.email, password: this.user.password };
          AuthService.login(user).then(function (res) {
            UserService.authUser = res.data;
            this.onSuccess();
          });
        })["catch"](function () {
          this.error = true;
        });
      }
    };
  }
}

module.exports = registerDire;

},{}],9:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * RegisterModalController
 */
var RegisterModalController = (function () {
  // @ngInject
  function RegisterModalController($modalInstance) {
    _classCallCheck(this, RegisterModalController);

    this.$modalInstance = $modalInstance;
  }
  RegisterModalController.$inject = ["$modalInstance"];

  _prototypeProperties(RegisterModalController, null, {
    close: {
      value: function close() {
        this.$modalInstance.dismiss("cancel");
      },
      writable: true,
      configurable: true
    },
    onSuccess: {
      value: function onSuccess() {
        this.$modalInstance.close();
      },
      writable: true,
      configurable: true
    }
  });

  return RegisterModalController;
})();

module.exports = RegisterModalController;

},{}],10:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  //@ngInject
  function fieldMatch($parse) {
    return {
      restrict: "AE",
      require: "ngModel",
      link: link
    };

    function link($scope, elem, attrs, ctrl) {
      $scope.$watch(function () {
        var valid = $parse(attrs.fieldMatch)($scope) === ctrl.$modelValue;
        ctrl.$setValidity("mismatch", valid);
      });
    }
  }
  fieldMatch.$inject = ["$parse"];

  angular.module("fieldMatch", []).directive("fieldMatch", fieldMatch);

})();

},{}],11:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  angular.module("password.chars.validator", []).directive("passwordCharsValidator", passwordCharsValidator);

  // @ngInject
  function passwordCharsValidator() {
    return {
      restrict: "A",
      link: link,
      require: "ngModel"
    };
    function link($scope, elem, attrs, ngModelController) {
      var REQUIRED_PATTERNS = [/\d+/, //numeric values
      /[a-z]+/, //lowercase values
      /[A-Z]+/, //uppercase values
      /\W+/, //special characters
      /^\S+$/ //no whitespace allowed
      ];

      ngModelController.$validators.passwordCharacters = function (value) {
        var status = true;
        angular.forEach(REQUIRED_PATTERNS, function (pattern) {
          status = status && pattern.test(value);
        });
        return status;
      };
    }
  }
})();

},{}],12:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  //@ngInject
  function spinnerBtn() {
    return {
      restrict: "AE",
      scope: {
        loading: "="
      },
      compile: function (ele, attr) {
        var spinner = angular.element("<i class=\"fa fa-spinner net-spinner\" ng-if=\"loading\"></i>");

        ele.append(spinner);

        ele.find("i").css("marginLeft", "5px");
      }
    };
  }

  module.exports = spinnerBtn;
})();

},{}],13:[function(require,module,exports){
"use strict";

angular.module("spinner.btn", []).directive("spinnerBtn", require("./spinner.btn.directive"));

},{"./spinner.btn.directive":12}],14:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  //@ngInject
  function waitMe() {
    return {
      restrict: "A",
      link: link
    };

    function link($scope, elem, attr) {
      $scope.$watch("waitMe", function (show) {
        if (show === true) {
          elem.waitMe({
            effect: attr.shape,
            text: attr.text,
            bg: "rgba(255,255,255,0.7)",
            color: "#000",
            sizeW: "",
            sizeH: ""
          });
        } else {
          elem.waitMe("hide");
        }
      });
    }
  }

  angular.module("wait.me", []).directive("waitMe", waitMe);
})();

},{}],15:[function(require,module,exports){
"use strict";

exports.appName = "mb.monster";

},{}],16:[function(require,module,exports){
"use strict";

// @ngInject
function authInterceptor(UserService, $injector) {
  return {
    request: function ($config) {


      return $config;
    },

    responseError: function (rejection) {
      if (rejection.status === 400) {}
      return rejection;
    }
  };
}
authInterceptor.$inject = ["UserService", "$injector"];

module.exports = authInterceptor;

},{}],17:[function(require,module,exports){
"use strict";

// @ngInject
function config($httpProvider, $sceProvider) {
  $httpProvider.interceptors.push("authInterceptor");

  $sceProvider.enabled(false);
}
config.$inject = ["$httpProvider", "$sceProvider"];

module.exports = config;

},{}],18:[function(require,module,exports){
"use strict";

/*@ngInject*/
function runPhase($rootScope, UserService, $state) {
  UserService.authUser = window.user || null;

  $rootScope.UserService = UserService;

  $rootScope.$on("$stateChangeStart", function (event, toState) {
    if (toState.authenticate && !UserService.authUser) {
      event.preventDefault();
      $state.go("home");
    }
  });

  $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });

  $rootScope.$on("$stateChangeSuccess", function () {});
}
runPhase.$inject = ["$rootScope", "UserService", "$state"];

module.exports = runPhase;

},{}],19:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * HomeController
 */
var HomeController =
// @ngInject
function HomeController() {
  _classCallCheck(this, HomeController);

  this.view = "home-view";
};

module.exports = HomeController;

},{}],20:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var HomeController = _interopRequire(require("./home.controller.js"));

angular.module(require("../config").appName).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("app", {
    abstract: true,
    views: {
      nav: {
        templateUrl: "app/nav/nav.tpl.html",
        controller: "NavController as Nav"
      },

      "": {
        templateUrl: "app/content.html"
      },

      footer: {
        templateUrl: "app/footer/footer.tpl.html"
      }

    }
  }).state("app.home", {
    url: "/",
    templateUrl: "app/home/home.tpl.html",
    controller: "HomeController as Home"
  });
}]).controller("HomeController", HomeController);

},{"../config":15,"./home.controller.js":19}],21:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  var modules = [
  /** Third party modules **/

  "ui.router", "ngStorage", "ngAnimate", "ngMessages", "wait.me",

  /** Local modules **/

  "password.chars.validator", "services", "spinner.btn", "auth.local", "fieldMatch"];

  module.exports = modules;
})();

},{}],22:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * NavController
 */
var NavController = (function () {
  // @ngInject
  /**
   *
   * @param AuthService
   */
  function NavController(AuthService) {
    _classCallCheck(this, NavController);

    this.AuthService = AuthService;
    this.view = "nav-view";
  }
  NavController.$inject = ["AuthService"];

  _prototypeProperties(NavController, null, {
    logOut: {
      value: function logOut() {
        this.AuthService.logout();
      },
      writable: true,
      configurable: true
    }
  });

  return NavController;
})();

module.exports = NavController;

},{}],23:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var NavController = _interopRequire(require("./nav.controller.js"));

angular.module(require("../config").appName).controller("NavController", NavController);

},{"../config":15,"./nav.controller.js":22}],24:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Auth Service
 */
var AuthService = (function () {
  // @ngInject
  function AuthService($http, UserService) {
    _classCallCheck(this, AuthService);

    this.$http = $http;
    this.UserService = UserService;
  }
  AuthService.$inject = ["$http", "UserService"];

  _prototypeProperties(AuthService, null, {
    login: {

      /**
       *
       * @param cred
       * @returns {HttpPromise}
       */
      value: function login(cred) {
        return this.$http.post("auth/login", cred);
      },
      writable: true,
      configurable: true
    },
    register: {

      /**
       *
       * @param user
       * @returns {HttpPromise}
       */
      value: function register(user) {
        return this.$http.post("auth/register", user);
      },
      writable: true,
      configurable: true
    },
    logout: {

      /**
       *
       * @returns {HttpPromise}
       */
      value: function logout() {
        this.UserService.authUser = null;
        return this.$http.post("auth/logout", {});
      },
      writable: true,
      configurable: true
    }
  });

  return AuthService;
})();

module.exports = AuthService;

},{}],25:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var AuthService = _interopRequire(require("./auth.service.js"));

var UserService = _interopRequire(require("./user.service.js"));

angular.module("services", []).service("AuthService", AuthService).service("UserService", UserService);

},{"./auth.service.js":24,"./user.service.js":26}],26:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * UserService
 */
var UserService =
// @ngInject
function UserService() {
  _classCallCheck(this, UserService);

  this.authUser = null;
};

module.exports = UserService;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9hdXRoL2F1dGguaW5kZXguanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb250cm9sbGVyLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2F1dGgvbG9naW4vbG9naW4uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2F1dGgvbG9naW4vbG9naW5Nb2RhbC5jb250cm9sbGVyLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2F1dGgvcmVnaXN0ZXIvZW1haWwtdmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb250cm9sbGVyLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXIuZGlyZWN0aXZlLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2F1dGgvcmVnaXN0ZXIvcmVnaXN0ZXJNb2RhbC5jb250cm9sbGVyLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2NvbW1vbi9maWVsZC1tYXRjaC5tb2R1bGUuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvY29tbW9uL3Bhc3N3b3JkLmNoYXJzLnZhbGlkYXRvci5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9jb21tb24vc3Bpbm5lci1idG4vc3Bpbm5lci5idG4uZGlyZWN0aXZlLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2NvbW1vbi9zcGlubmVyLWJ0bi9zcGlubmVyLmJ0bi5tb2R1bGUuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvY29tbW9uL3dhaXQtbWUuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvY29uZmlnLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2NvbmZpZy9hdXRoLmludGVyY2VwdG9yLmpzIiwiL1VzZXJzL25ldGFuZWxiYXNhbC93d3cvbm9kZS9wdWJsaWMvYXBwL2NvbmZpZy9jb25maWcuaW5kZXguanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvY29uZmlnL3J1bi5waGFzZS5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9ob21lL2hvbWUuaW5kZXguanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvbW9kdWxlcy5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9uYXYvbmF2LmNvbnRyb2xsZXIuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvbmF2L25hdi5pbmRleC5qcyIsIi9Vc2Vycy9uZXRhbmVsYmFzYWwvd3d3L25vZGUvcHVibGljL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvc2VydmljZXMvc2VydmljZXMuaW5kZXguanMiLCIvVXNlcnMvbmV0YW5lbGJhc2FsL3d3dy9ub2RlL3B1YmxpYy9hcHAvc2VydmljZXMvdXNlci5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxDQUFDLFlBQVc7QUFDVixjQUFZLENBQUE7QUFDWixNQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRW5DLFNBQU8sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDOztBQUV2QyxTQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQzs7QUFFbkQsU0FBTyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7O0FBRTdDLFNBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDOzs7O0FBSTVCLFNBQU8sQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOztBQUVyQyxTQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FFbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBRXhDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUVoRSxHQUFHLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQTs7QUFFeEMsU0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7O0FBRTdCLFNBQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztBQUU3QixTQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztDQUU1QixDQUFBLEVBQUcsQ0FBQzs7Ozs7QUM5QkwsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLENBRTdCLE1BQU0sQ0FBQyxVQUFFLGNBQWMsRUFBTTtBQUU1QixnQkFBYyxDQUNYLEtBQUssQ0FBQyxXQUFXLEVBQUU7QUFDbEIsT0FBRyxFQUFVLGFBQWE7QUFDMUIsY0FBVSxFQUFHLDBCQUEwQjtBQUN2QyxlQUFXLEVBQUUsMkJBQTJCO0dBQ3pDLENBQUMsQ0FDRCxLQUFLLENBQUMsY0FBYyxFQUFFO0FBQ3JC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ZSxFQUFFLElBQUksQ0FBQyxDQUFDO09BQy9DOzs7O0FBTUMsVUFBTTs7Ozs7O2FBQUEsa0JBQUc7QUFDVCxZQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDakMsZUFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDM0M7Ozs7OztTQWhDRyxXQUFXOzs7aUJBbUNGLFdBQVc7Ozs7Ozs7SUN0Q25CLFdBQVcsMkJBQU0sbUJBQW1COztJQUNwQyxXQUFXLDJCQUFNLG1CQUFtQjs7QUFFM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBRTNCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBRW5DLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7Ozs7Ozs7Ozs7SUNKakMsV0FBVzs7QUFFSixTQUZQLFdBQVc7d0JBQVgsV0FBVzs7QUFHYixNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztDQUN0Qjs7aUJBSVksV0FBVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuICB2YXIgbW9kdWxlcyA9IHJlcXVpcmUoJy4vbW9kdWxlcycpO1xuXG4gIHJlcXVpcmUoJy4vY29tbW9uL2ZpZWxkLW1hdGNoLm1vZHVsZScpO1xuXG4gIHJlcXVpcmUoJy4vY29tbW9uL3NwaW5uZXItYnRuL3NwaW5uZXIuYnRuLm1vZHVsZScpO1xuXG4gIHJlcXVpcmUoJy4vY29tbW9uL3Bhc3N3b3JkLmNoYXJzLnZhbGlkYXRvcicpO1xuXG4gIHJlcXVpcmUoJy4vY29tbW9uL3dhaXQtbWUnKTtcblxuICAvKioqKioqKioqKioqKioqKioqKioqKioqKiogQVBQIGludGVybmFsIG1vZHVsZXMgKioqKioqKioqKioqKioqKioqKioqKi9cblxuICByZXF1aXJlKCcuL3NlcnZpY2VzL3NlcnZpY2VzLmluZGV4Jyk7XG5cbiAgYW5ndWxhci5tb2R1bGUoJ21iLm1vbnN0ZXInLCBtb2R1bGVzKVxuXG4gICAgLmNvbmZpZyhyZXF1aXJlKCcuL2NvbmZpZy9jb25maWcuaW5kZXgnKSlcblxuICAgIC5mYWN0b3J5KCdhdXRoSW50ZXJjZXB0b3InLCByZXF1aXJlKCcuL2NvbmZpZy9hdXRoLmludGVyY2VwdG9yJykpXG5cbiAgICAucnVuKHJlcXVpcmUoJy4vY29uZmlnL3J1bi5waGFzZS5qcycpKVxuXG4gIHJlcXVpcmUoJy4vaG9tZS9ob21lLmluZGV4Jyk7XG5cbiAgcmVxdWlyZSgnLi9hdXRoL2F1dGguaW5kZXgnKTtcblxuICByZXF1aXJlKCcuL25hdi9uYXYuaW5kZXgnKTtcblxufSkoKTtcblxuXG4iLCJhbmd1bGFyLm1vZHVsZSgnYXV0aC5sb2NhbCcsIFtdKVxuXG4gIC5jb25maWcoKCAkc3RhdGVQcm92aWRlciApID0+IHtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ2FwcC5sb2dpbicsIHtcbiAgICAgICAgdXJsICAgICAgICA6IFwiL2F1dGgvbG9naW5cIixcbiAgICAgICAgY29udHJvbGxlciA6ICdMb2dpbkNvbnRyb2xsZXIgYXMgTG9naW4nLFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvYXV0aC9sb2dpbi9sb2dpbi5odG1sXCJcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ2FwcC5yZWdpc3RlcicsIHtcbiAgICAgICAgdXJsICAgICAgICA6IFwiL2F1dGgvcmVnaXN0ZXJcIixcbiAgICAgICAgY29udHJvbGxlciA6ICdSZWdpc3RlckNvbnRyb2xsZXIgYXMgUmVnaXN0ZXInLFxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJhcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5odG1sXCJcbiAgICAgIH0pXG4gIH0pXG5cbiAgLmNvbnRyb2xsZXIoJ0xvZ2luQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vbG9naW4vbG9naW4uY29udHJvbGxlcicpKVxuXG4gIC5jb250cm9sbGVyKCdSZWdpc3RlckNvbnRyb2xsZXInLCByZXF1aXJlKCcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbnRyb2xsZXInKSlcblxuICAuY29udHJvbGxlcignUmVnaXN0ZXJNb2RhbENvbnRyb2xsZXInLCByZXF1aXJlKCcuL3JlZ2lzdGVyL3JlZ2lzdGVyTW9kYWwuY29udHJvbGxlcicpKVxuXG4gIC5jb250cm9sbGVyKCdMb2dpbk1vZGFsQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vbG9naW4vbG9naW5Nb2RhbC5jb250cm9sbGVyJykpXG5cbiAgLmRpcmVjdGl2ZSgncmVnaXN0ZXInLCByZXF1aXJlKCcuL3JlZ2lzdGVyL3JlZ2lzdGVyLmRpcmVjdGl2ZScpKVxuXG4gIC5kaXJlY3RpdmUoJ2xvZ2luJywgcmVxdWlyZSgnLi9sb2dpbi9sb2dpbi5kaXJlY3RpdmUnKSlcblxuICAuZGlyZWN0aXZlKCd2YWxpZEVtYWlsJywgcmVxdWlyZSgnLi9yZWdpc3Rlci9lbWFpbC12YWxpZGF0aW9uLmRpcmVjdGl2ZScpKTtcblxuIiwiLyoqXG4gKiBMb2dpbkNvbnRyb2xsZXJcbiAqL1xuY2xhc3MgTG9naW5Db250cm9sbGVyIHtcbiAgLy8gQG5nSW5qZWN0XG4gIGNvbnN0cnVjdG9yKCApIHtcblxuICB9XG5cbiAgb25TdWNjZXNzKCkge1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRyb2xsZXJcblxuIiwiLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBsb2dpbkRpcmUoIFVzZXJTZXJ2aWNlICkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0ICAgICAgICA6ICdBRScsXG4gICAgdGVtcGxhdGVVcmwgICAgIDogJ2FwcC9hdXRoL2xvZ2luL2xvZ2luLnRwbC5odG1sJyxcbiAgICBiaW5kVG9Db250cm9sbGVyOiB0cnVlLFxuICAgIHNjb3BlICAgICAgICAgICA6IHtcbiAgICAgIG9uU3VjY2VzczogJz0nXG4gICAgfSxcbiAgICBjb250cm9sbGVyICAgICAgOiBjb250cm9sbGVyXG4gIH1cblxuICAvLyBAbmdJbmplY3RcbiAgZnVuY3Rpb24gY29udHJvbGxlciggQXV0aFNlcnZpY2UgKSB7XG5cbiAgICB0aGlzLmxvZ2luID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIGlmKCB0aGlzLmxvZ2luRm9ybS4kdmFsaWQgKSB7XG4gICAgICAgIEF1dGhTZXJ2aWNlXG4gICAgICAgICAgLmxvZ2luKHRoaXMudXNlcikudGhlbihmdW5jdGlvbiggcmVzICkge1xuICAgICAgICAgICAgaWYoICFyZXMgKSB7XG4gICAgICAgICAgICAgIHRvYXN0ci5lcnJvcignU29tdGhpbmcgd3JvbmcnKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgVXNlclNlcnZpY2UuYXV0aFVzZXIgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2dpbkRpcmU7IiwiLyoqXG4gKiBMb2dpbk1vZGFsQ29udHJvbGxlclxuICovXG5jbGFzcyBMb2dpbk1vZGFsQ29udHJvbGxlciB7XG4gIC8vIEBuZ0luamVjdFxuICBjb25zdHJ1Y3RvciggJG1vZGFsSW5zdGFuY2UgKSB7XG4gICAgdGhpcy4kbW9kYWxJbnN0YW5jZSA9ICRtb2RhbEluc3RhbmNlO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy4kbW9kYWxJbnN0YW5jZS5kaXNtaXNzKCdjYW5jZWwnKTtcbiAgfVxuXG4gIG9uU3VjY2VzcygpIHtcbiAgICB0aGlzLiRtb2RhbEluc3RhbmNlLmNsb3NlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbk1vZGFsQ29udHJvbGxlclxuIiwiLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiB2YWxpZEVtYWlsKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogXCJuZ01vZGVsXCIsXG4gICAgbGluazogbGlua1xuICB9XG4gIGZ1bmN0aW9uIGxpbmsoICRzY29wZSwgZWxlbSwgYXR0cnMsIG5nTW9kZWwgKSB7XG4gICAgbmdNb2RlbC4kdmFsaWRhdG9ycy52YWxpZEVtYWlsID0gZnVuY3Rpb24obW9kZWxWYWx1ZSkge1xuICAgICAgdmFyIGVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKFwiXihbYS16QS1aMC05XStbYS16QS1aMC05Ll8lLV0qQCg/OlthLXpBLVowLTktXStcXC4pK1thLXpBLVpdezIsNH0pJFwiKTtcbiAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QobW9kZWxWYWx1ZSk7XG4gICAgfVxuICB9XG59XG5cblxubW9kdWxlLmV4cG9ydHMgPSB2YWxpZEVtYWlsOyIsIi8qKlxuICogUmVnaXN0ZXJDb250cm9sbGVyXG4gKi9cbmNsYXNzIFJlZ2lzdGVyQ29udHJvbGxlciB7XG4gIC8vIEBuZ0luamVjdFxuICBjb25zdHJ1Y3RvcigpIHtcblxuICB9XG5cbiAgb25TdWNjZXNzKCkge1xuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlckNvbnRyb2xsZXIiLCIvLyBAbmdJbmplY3RcbmZ1bmN0aW9uIHJlZ2lzdGVyRGlyZSgpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdCAgICAgICAgOiAnQUUnLFxuICAgIHRlbXBsYXRlVXJsICAgICA6ICdhcHAvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci50cGwuaHRtbCcsXG4gICAgYmluZFRvQ29udHJvbGxlcjogdHJ1ZSxcbiAgICBzY29wZSAgICAgICAgICAgOiB7XG4gICAgICBvblN1Y2Nlc3M6ICc9J1xuICAgIH0sXG4gICAgY29udHJvbGxlciAgICAgIDogY29udHJvbGxlclxuICB9XG5cbiAgLy8gQG5nSW5qZWN0XG4gIGZ1bmN0aW9uIGNvbnRyb2xsZXIoIEF1dGhTZXJ2aWNlLCBVc2VyU2VydmljZSApIHtcblxuICAgIHRoaXMucmVnaXN0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmKCB0aGlzLnJlZ2lzdGVyRm9ybS4kdmFsaWQgKSB7XG5cbiAgICAgICAgQXV0aFNlcnZpY2VcbiAgICAgICAgICAucmVnaXN0ZXIodGhpcy51c2VyKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHVzZXIgPSB7IGVtYWlsOiB0aGlzLnVzZXIuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnVzZXIucGFzc3dvcmQgfTtcbiAgICAgICAgICAgIEF1dGhTZXJ2aWNlLmxvZ2luKHVzZXIpXG4gICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKCByZXMgKSB7XG4gICAgICAgICAgICAgICAgVXNlclNlcnZpY2UuYXV0aFVzZXIgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcygpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgIH0pXG5cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVnaXN0ZXJEaXJlOyIsIi8qKlxuICogUmVnaXN0ZXJNb2RhbENvbnRyb2xsZXJcbiAqL1xuY2xhc3MgUmVnaXN0ZXJNb2RhbENvbnRyb2xsZXIge1xuICAvLyBAbmdJbmplY3RcbiAgY29uc3RydWN0b3IoICRtb2RhbEluc3RhbmNlICkge1xuICAgIHRoaXMuJG1vZGFsSW5zdGFuY2UgPSAkbW9kYWxJbnN0YW5jZTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuJG1vZGFsSW5zdGFuY2UuZGlzbWlzcygnY2FuY2VsJyk7XG4gIH1cblxuICBvblN1Y2Nlc3MoKSB7XG4gICAgdGhpcy4kbW9kYWxJbnN0YW5jZS5jbG9zZSgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJNb2RhbENvbnRyb2xsZXJcbiIsIihmdW5jdGlvbiAoKSB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgLy9AbmdJbmplY3RcbiAgICBmdW5jdGlvbiBmaWVsZE1hdGNoKCRwYXJzZSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcmVzdHJpY3Q6J0FFJyxcbiAgICAgICAgcmVxdWlyZTogJ25nTW9kZWwnLFxuICAgICAgICBsaW5rOiBsaW5rXG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGxpbmsoJHNjb3BlLCBlbGVtLCBhdHRycywgY3RybCkge1xuICAgICAgICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB2YWxpZCA9ICRwYXJzZShhdHRycy5maWVsZE1hdGNoKSgkc2NvcGUpID09PSBjdHJsLiRtb2RlbFZhbHVlO1xuICAgICAgICAgIGN0cmwuJHNldFZhbGlkaXR5KCdtaXNtYXRjaCcsIHZhbGlkKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCdmaWVsZE1hdGNoJywgW10pXG4gICAgICAuZGlyZWN0aXZlKCdmaWVsZE1hdGNoJywgZmllbGRNYXRjaCk7XG5cblxufSkoKTtcblxuXG5cblxuXG5cblxuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICBhbmd1bGFyLm1vZHVsZSgncGFzc3dvcmQuY2hhcnMudmFsaWRhdG9yJywgW10pXG4gICAgLmRpcmVjdGl2ZSgncGFzc3dvcmRDaGFyc1ZhbGlkYXRvcicsIHBhc3N3b3JkQ2hhcnNWYWxpZGF0b3IpO1xuXG4gIC8vIEBuZ0luamVjdFxuICBmdW5jdGlvbiBwYXNzd29yZENoYXJzVmFsaWRhdG9yKCkge1xuICAgIHJldHVybiB7XG4gICAgICByZXN0cmljdDogJ0EnLFxuICAgICAgbGluayAgICA6IGxpbmssXG4gICAgICByZXF1aXJlIDogJ25nTW9kZWwnXG4gICAgfVxuICAgIGZ1bmN0aW9uIGxpbmsoICRzY29wZSwgZWxlbSwgYXR0cnMgLCBuZ01vZGVsQ29udHJvbGxlcikge1xuXG4gICAgICB2YXIgUkVRVUlSRURfUEFUVEVSTlMgPSBbXG4gICAgICAgIC9cXGQrLywgICAgLy9udW1lcmljIHZhbHVlc1xuICAgICAgICAvW2Etel0rLywgLy9sb3dlcmNhc2UgdmFsdWVzXG4gICAgICAgIC9bQS1aXSsvLCAvL3VwcGVyY2FzZSB2YWx1ZXNcbiAgICAgICAgL1xcVysvLCAgICAvL3NwZWNpYWwgY2hhcmFjdGVyc1xuICAgICAgICAvXlxcUyskLyAgIC8vbm8gd2hpdGVzcGFjZSBhbGxvd2VkXG4gICAgICBdO1xuXG4gICAgICBuZ01vZGVsQ29udHJvbGxlci4kdmFsaWRhdG9ycy5wYXNzd29yZENoYXJhY3RlcnMgPSBmdW5jdGlvbiggdmFsdWUgKSB7XG4gICAgICAgIHZhciBzdGF0dXMgPSB0cnVlO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goUkVRVUlSRURfUEFUVEVSTlMsIGZ1bmN0aW9uKCBwYXR0ZXJuICkge1xuICAgICAgICAgIHN0YXR1cyA9IHN0YXR1cyAmJiBwYXR0ZXJuLnRlc3QodmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbn0pKCk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vQG5nSW5qZWN0XG4gIGZ1bmN0aW9uIHNwaW5uZXJCdG4oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3RyaWN0OiAnQUUnLFxuICAgICAgc2NvcGUgICA6IHtcbiAgICAgICAgbG9hZGluZzogJz0nXG4gICAgICB9LFxuICAgICAgY29tcGlsZSA6IGZ1bmN0aW9uKCBlbGUsIGF0dHIgKSB7XG5cbiAgICAgICAgdmFyIHNwaW5uZXIgPSBhbmd1bGFyLmVsZW1lbnQoICc8aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgbmV0LXNwaW5uZXJcIiBuZy1pZj1cImxvYWRpbmdcIj48L2k+JyApO1xuXG4gICAgICAgIGVsZS5hcHBlbmQoIHNwaW5uZXIgKTtcblxuICAgICAgICBlbGUuZmluZCggJ2knICkuY3NzKCAnbWFyZ2luTGVmdCcsICc1cHgnICk7XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gc3Bpbm5lckJ0bjtcbn0pKCk7XG5cblxuXG5cblxuXG5cbiIsImFuZ3VsYXIubW9kdWxlKCAnc3Bpbm5lci5idG4nICwgW10gKVxuXG4gIC5kaXJlY3RpdmUoJ3NwaW5uZXJCdG4nLCByZXF1aXJlKCcuL3NwaW5uZXIuYnRuLmRpcmVjdGl2ZScpKTsiLCIoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0J1xuXG4gIC8vQG5nSW5qZWN0XG4gIGZ1bmN0aW9uIHdhaXRNZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6ICdBJyxcbiAgICAgIGxpbmsgICAgOiBsaW5rXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluayggJHNjb3BlLCBlbGVtLCBhdHRyICkge1xuICAgICAgJHNjb3BlLiR3YXRjaCgnd2FpdE1lJywgZnVuY3Rpb24oIHNob3cgKSB7XG4gICAgICAgIGlmKCBzaG93ID09PSB0cnVlICkge1xuICAgICAgICAgIGVsZW1cbiAgICAgICAgICAgIC53YWl0TWUoe1xuICAgICAgICAgICAgICBlZmZlY3Q6IGF0dHIuc2hhcGUsXG4gICAgICAgICAgICAgIHRleHQgIDogYXR0ci50ZXh0LFxuICAgICAgICAgICAgICBiZyAgICA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknLFxuICAgICAgICAgICAgICBjb2xvciA6ICcjMDAwJyxcbiAgICAgICAgICAgICAgc2l6ZVcgOiAnJyxcbiAgICAgICAgICAgICAgc2l6ZUggOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS53YWl0TWUoXCJoaWRlXCIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKCd3YWl0Lm1lJywgW10pXG4gICAgLmRpcmVjdGl2ZSgnd2FpdE1lJywgd2FpdE1lKTtcblxufSkoKTtcbiIsImV4cG9ydHMuYXBwTmFtZSA9ICdtYi5tb25zdGVyJzsiLCIvLyBAbmdJbmplY3RcbmZ1bmN0aW9uIGF1dGhJbnRlcmNlcHRvciggVXNlclNlcnZpY2UsICRpbmplY3RvciApIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1ZXN0OiBmdW5jdGlvbiggJGNvbmZpZyApIHtcblxuXG4gICAgICByZXR1cm4gJGNvbmZpZztcbiAgICB9LFxuXG4gICAgcmVzcG9uc2VFcnJvcjogZnVuY3Rpb24oIHJlamVjdGlvbiApIHtcbiAgICAgIGlmKCByZWplY3Rpb24uc3RhdHVzID09PSA0MDAgKSB7XG5cblxuXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVqZWN0aW9uO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoSW50ZXJjZXB0b3I7IiwiLy8gQG5nSW5qZWN0XG5mdW5jdGlvbiBjb25maWcoICRodHRwUHJvdmlkZXIsICRzY2VQcm92aWRlciApIHtcblxuICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcblxuICAkc2NlUHJvdmlkZXIuZW5hYmxlZChmYWxzZSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnOyIsIi8qQG5nSW5qZWN0Ki9cbmZ1bmN0aW9uIHJ1blBoYXNlKCAkcm9vdFNjb3BlLCBVc2VyU2VydmljZSwgJHN0YXRlICkge1xuXG4gIFVzZXJTZXJ2aWNlLmF1dGhVc2VyID0gd2luZG93LnVzZXIgfHwgbnVsbDtcblxuICAkcm9vdFNjb3BlLlVzZXJTZXJ2aWNlID0gVXNlclNlcnZpY2U7XG5cbiAgJHJvb3RTY29wZS4kb24oXCIkc3RhdGVDaGFuZ2VTdGFydFwiLCBmdW5jdGlvbiggZXZlbnQsIHRvU3RhdGUgKSB7XG5cbiAgICBpZiggdG9TdGF0ZS5hdXRoZW50aWNhdGUgJiYgIVVzZXJTZXJ2aWNlLmF1dGhVc2VyICkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICRzdGF0ZS5nbyhcImhvbWVcIik7XG4gICAgfVxuXG4gIH0pO1xuXG4gICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VFcnJvcicsIGZ1bmN0aW9uKCBldmVudCwgdG9TdGF0ZSwgdG9QYXJhbXMsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcywgZXJyb3IgKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICB9KTtcblxuICAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uKCkge1xuXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJ1blBoYXNlOyIsIi8qKlxuICogSG9tZUNvbnRyb2xsZXJcbiAqL1xuY2xhc3MgSG9tZUNvbnRyb2xsZXIge1xuICAvLyBAbmdJbmplY3RcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy52aWV3ID0gJ2hvbWUtdmlldyc7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lQ29udHJvbGxlciIsImltcG9ydCBIb21lQ29udHJvbGxlciBmcm9tICcuL2hvbWUuY29udHJvbGxlci5qcyc7XG5cbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL2NvbmZpZycpLmFwcE5hbWUpXG5cbiAgLmNvbmZpZygoICRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIgKSA9PiB7XG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKFwiL1wiKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyLnN0YXRlKCdhcHAnLCB7XG4gICAgICBhYnN0cmFjdDogdHJ1ZSxcbiAgICAgIHZpZXdzICAgOiB7XG4gICAgICAgIG5hdjoge1xuICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL25hdi9uYXYudHBsLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXIgOiAnTmF2Q29udHJvbGxlciBhcyBOYXYnXG4gICAgICAgIH0sXG5cbiAgICAgICAgJyc6IHtcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb250ZW50Lmh0bWwnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvZm9vdGVyL2Zvb3Rlci50cGwuaHRtbCdcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSkuc3RhdGUoJ2FwcC5ob21lJywge1xuICAgICAgdXJsICAgICAgICA6ICcvJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2hvbWUvaG9tZS50cGwuaHRtbCcsXG4gICAgICBjb250cm9sbGVyIDogJ0hvbWVDb250cm9sbGVyIGFzIEhvbWUnXG4gICAgfSlcblxuICB9KVxuXG4gIC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIEhvbWVDb250cm9sbGVyKTtcblxuXG5cblxuIiwiKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCdcblxuICB2YXIgbW9kdWxlcyA9IFtcbiAgICAvKiogVGhpcmQgcGFydHkgbW9kdWxlcyAqKi9cblxuICAgICd1aS5yb3V0ZXInLFxuICAgICduZ1N0b3JhZ2UnLFxuICAgICduZ0FuaW1hdGUnLFxuICAgICduZ01lc3NhZ2VzJyxcbiAgICAnd2FpdC5tZScsXG5cbiAgLyoqIExvY2FsIG1vZHVsZXMgKiovXG5cbiAgICAncGFzc3dvcmQuY2hhcnMudmFsaWRhdG9yJyxcbiAgICAnc2VydmljZXMnLFxuICAgICdzcGlubmVyLmJ0bicsXG4gICAgJ2F1dGgubG9jYWwnLFxuICAgICdmaWVsZE1hdGNoJ1xuICBdO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbW9kdWxlcztcblxufSkoKTsiLCIvKipcbiAqIE5hdkNvbnRyb2xsZXJcbiAqL1xuY2xhc3MgTmF2Q29udHJvbGxlciB7XG4gIC8vIEBuZ0luamVjdFxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIEF1dGhTZXJ2aWNlXG4gICAqL1xuICAgIGNvbnN0cnVjdG9yKCBBdXRoU2VydmljZSApIHtcbiAgICB0aGlzLkF1dGhTZXJ2aWNlID0gQXV0aFNlcnZpY2U7XG4gICAgdGhpcy52aWV3ID0gJ25hdi12aWV3JztcbiAgfVxuXG4gIGxvZ091dCgpIHtcbiAgICB0aGlzLkF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2Q29udHJvbGxlclxuXG5cblxuIiwiaW1wb3J0IE5hdkNvbnRyb2xsZXIgZnJvbSAnLi9uYXYuY29udHJvbGxlci5qcyc7XG5cbmFuZ3VsYXIubW9kdWxlKHJlcXVpcmUoJy4uL2NvbmZpZycpLmFwcE5hbWUpXG5cbiAgLmNvbnRyb2xsZXIoJ05hdkNvbnRyb2xsZXInLCBOYXZDb250cm9sbGVyKTtcblxuIiwiLyoqXG4gKiBBdXRoIFNlcnZpY2VcbiAqL1xuY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAvLyBAbmdJbmplY3RcbiAgY29uc3RydWN0b3IoICRodHRwLCBVc2VyU2VydmljZSApIHtcbiAgICB0aGlzLiRodHRwID0gJGh0dHA7XG4gICAgdGhpcy5Vc2VyU2VydmljZSA9IFVzZXJTZXJ2aWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBjcmVkXG4gICAqIEByZXR1cm5zIHtIdHRwUHJvbWlzZX1cbiAgICovXG4gICAgbG9naW4oIGNyZWQgKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnYXV0aC9sb2dpbicsIGNyZWQpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB1c2VyXG4gICAqIEByZXR1cm5zIHtIdHRwUHJvbWlzZX1cbiAgICovXG4gICAgcmVnaXN0ZXIoIHVzZXIgKSB7XG4gICAgcmV0dXJuIHRoaXMuJGh0dHAucG9zdCgnYXV0aC9yZWdpc3RlcicsIHVzZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEByZXR1cm5zIHtIdHRwUHJvbWlzZX1cbiAgICovXG4gICAgbG9nb3V0KCkge1xuICAgIHRoaXMuVXNlclNlcnZpY2UuYXV0aFVzZXIgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLiRodHRwLnBvc3QoJ2F1dGgvbG9nb3V0Jywge30pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dGhTZXJ2aWNlXG5cblxuIiwiaW1wb3J0IEF1dGhTZXJ2aWNlIGZyb20gJy4vYXV0aC5zZXJ2aWNlLmpzJztcbmltcG9ydCBVc2VyU2VydmljZSBmcm9tICcuL3VzZXIuc2VydmljZS5qcyc7XG5cbmFuZ3VsYXIubW9kdWxlKCdzZXJ2aWNlcycsIFtdKVxuXG4gIC5zZXJ2aWNlKCdBdXRoU2VydmljZScsIEF1dGhTZXJ2aWNlKVxuXG4gIC5zZXJ2aWNlKCdVc2VyU2VydmljZScsIFVzZXJTZXJ2aWNlKTsiLCIvKipcbiAqIFVzZXJTZXJ2aWNlXG4gKi9cbmNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgLy8gQG5nSW5qZWN0XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXV0aFVzZXIgPSBudWxsO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclNlcnZpY2UiXX0=

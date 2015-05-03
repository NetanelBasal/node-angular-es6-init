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

  require("./services/$hello.index");

  var app = angular.module(require("./config").appName, modules).config(require("./config/config.index")).factory("authInterceptor", require("./config/auth.interceptor")).run(require("./config/run.phase.js"));

  require("./routes")(app);

  require("./home")(app);

  require("./auth/auth.index");

})();

},{"./auth/auth.index":2,"./common/field-match.module":10,"./common/password.chars.validator":11,"./common/spinner-btn/spinner.btn.module":13,"./common/wait-me":14,"./config":15,"./config/auth.interceptor":16,"./config/config.index":17,"./config/run.phase.js":18,"./home":21,"./modules":22,"./routes":24,"./services/$hello.index":25,"./services/services.index":28}],2:[function(require,module,exports){
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

exports.appName = "nb";

},{}],16:[function(require,module,exports){
"use strict";

// @ngInject
function authInterceptor(UserService, $injector) {
  return {
    request: function ($config) {
      if (UserService.authUser) {
        $config.headers.Authorization = UserService.authUser.token;
      }

      return $config;
    },

    responseError: function (rejection) {
      return rejection;
    }
  };
}
authInterceptor.$inject = ["UserService", "$injector"];

module.exports = authInterceptor;

},{}],17:[function(require,module,exports){
"use strict";

// @ngInject
function config($httpProvider, $helloProvider) {
  $helloProvider.setProviders({
    google: "94588562106-pmpfft86rrpbik52oku8g6q7ipotuti1.apps.googleusercontent.com",
    facebook: "357618721101537"
  }, { redirect_uri: "http://localhost:3000" });

  $httpProvider.interceptors.push("authInterceptor");
}
config.$inject = ["$httpProvider", "$helloProvider"];

module.exports = config;

},{}],18:[function(require,module,exports){
"use strict";

/*@ngInject*/
function runPhase($rootScope, UserService, $state, AuthService) {


  UserService.authUser = AuthService.getUserToken();

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
runPhase.$inject = ["$rootScope", "UserService", "$state", "AuthService"];

module.exports = runPhase;

},{}],19:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

module.exports = function (app) {
  app.controller("HomeController", HomeController);
};

var HomeController = (function () {
  // @ngInject
  function HomeController($socket, AuthService) {
    var _this = this;
    _classCallCheck(this, HomeController);

    this.$socket = $socket;
    this.AuthService = AuthService;
    this.pepoles = [{ name: "avi" }, { name: "netanel" }];
    this.$socket.on("addPepole", function (data) {
      return _this.pepoles.push(data);
    });
  }
  HomeController.$inject = ["$socket", "AuthService"];
  HomeController.$inject = ["$socket", "AuthService"];

  _prototypeProperties(HomeController, null, {
    getMsg: {
      value: function getMsg() {
        this.$socket.emit("addPepole", { name: "more man" });
      },
      writable: true,
      configurable: true
    },
    register: {
      value: function register() {
        this.AuthService.register(this.user).then(function (res) {
          console.log(res);
        });
      },
      writable: true,
      configurable: true
    },
    login: {
      value: function login() {
        var _this = this;
        this.AuthService.login(this.userLogin).then(function (res) {
          _this.AuthService.saveUserToken(res.data);
        });
      },
      writable: true,
      configurable: true
    },
    logout: {
      value: function logout() {
        this.AuthService.deleteUserToken();
      },
      writable: true,
      configurable: true
    },
    profile: {
      value: function profile() {
        this.$http.get("/profile").then(function (res) {
          console.log(res);
        })["catch"](function (err) {
          console.log(err);
        });
      },
      writable: true,
      configurable: true
    },
    auth: {
      value: function auth() {
        this.AuthService.providerLogin("facebook").then(function () {
          console.log("success");
        });
      },
      writable: true,
      configurable: true
    },
    google: {
      value: function google() {
        this.AuthService.providerLogin("google").then(function () {
          console.log("success");
        });
      },
      writable: true,
      configurable: true
    }
  });

  return HomeController;
})();

},{}],20:[function(require,module,exports){
"use strict";

module.exports = function (app) {
  // @ngInject
  app.directive("home", function () {
    return {
      restrict: "E",
      templateUrl: "app/home/views/home.tpl.html",
      scope: {},
      controller: "HomeController as home",
      link: link
    };

    function link(scope, elem, attr) {
      console.log("Im in home");
    }
  });
};

},{}],21:[function(require,module,exports){
"use strict";

module.exports = function (app) {
  require("./home.controller")(app);
  require("./home.directive")(app);
};

},{"./home.controller":19,"./home.directive":20}],22:[function(require,module,exports){
"use strict";

(function () {
  "use strict";

  var modules = [
  /** Third party modules **/

  "ui.router", "ngAnimate", "ngMessages", "wait.me", "ui.bootstrap", "angular-storage", "$hello",
  /** Local modules **/

  "password.chars.validator", "services", "spinner.btn", "auth.local", "fieldMatch"];

  module.exports = modules;
})();

},{}],23:[function(require,module,exports){
"use strict";

module.exports = function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("home", {
    url: "/",
    template: "<home></home>"
  });
};

},{}],24:[function(require,module,exports){
"use strict";

module.exports = function (app) {
  app.config(require("./home/home.route"));
};

},{"./home/home.route":23}],25:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var $hello = _interopRequire(require("./$hello"));

angular.module("$hello", []).provider("$hello", $hello);

},{"./$hello":26}],26:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * $hello provider
 */
var $hello = (function () {
  function $hello() {
    _classCallCheck(this, $hello);

    this.providers = {};
    this.options = {};
    this.$hello = window.hello;
  }

  _prototypeProperties($hello, null, {
    setProviders: {
      value: function setProviders(providers, options) {
        this.providers = providers;
        this.options = options;
        this.$hello.init(this.providers, this.options);
      },
      writable: true,
      configurable: true
    },
    $get: {

      // @ngInject
      value: ["$q", function $get($q) {
        return {
          $hello: this.$hello,
          providers: this.providers,
          login: function login(providerName, options) {
            var deferred = $q.defer();
            if (this.providers[providerName]) {
              this.$hello.login(providerName, options).then(function () {
                return deferred.resolve("Login successfull");
              }, function (err) {
                return deferred.reject(err);
              });
              return deferred.promise;
            } else {
              throw new Error("Provider is not defined");
            }
          },

          logOut: function logOut(providerName) {
            var deferred = $q.defer();
            if (this.providers[providerName]) {
              this.$hello.logout(providerName, options).then(function () {
                return deferred.resolve("Logout successfull");
              }, function (err) {
                return deferred.reject(err);
              });
              return deferred.promise;
            } else {
              throw new Error("Provider is not defined");
            }
          },

          api: function api(providerName, path) {
            var deferred = $q.defer();
            this.$hello(providerName).api(path).then(function (json) {
              return deferred.resolve(json);
            }, function (err) {
              return deferred.reject(err);
            });
            return deferred.promise;
          }

        };
      }],
      writable: true,
      configurable: true
    }
  });

  return $hello;
})();

module.exports = $hello;

},{}],27:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * Auth Service
 */
var AuthService = (function () {
  // @ngInject
  function AuthService($http, UserService, store, $q, $hello) {
    _classCallCheck(this, AuthService);

    this.$http = $http;
    this.store = store;
    this.$hello = $hello;
    this.$q = $q;
    this.UserService = UserService;
  }
  AuthService.$inject = ["$http", "UserService", "store", "$q", "$hello"];

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
    providerLogin: {

      /**
       *
       * @param providerName
       * @param user
       * @returns {*}
       */
      value: function providerLogin(providerName) {
        var _this = this;
        var defferd = this.$q.defer();
        this.providerAuth(providerName).then(function (json) {
          _this.$http.post("/auth/" + providerName, json).then(function (res) {
            _this.saveUserToken(res.data);
            return defferd.resolve("Auth successfull");
          })["catch"](function (err) {
            return defferd.reject(err);
          });
        });
        return defferd.promise;
      },
      writable: true,
      configurable: true
    },
    providerAuth: {

      /**
       *
       * @param providerName
       * @returns {*}
       */
      value: function providerAuth(providerName) {
        var _this = this;
        var defferd = this.$q.defer();
        this.$hello.login(providerName, { scope: "email" }).then(function () {
          return true;
        }).then(function () {
          _this.$hello.api(providerName, "me").then(function (json) {
            defferd.resolve(json);
          });
        })["catch"](function (err) {
          defferd.reject(err);
        });
        return defferd.promise;
      },
      writable: true,
      configurable: true
    },
    saveUserToken: {

      /**
       *
       * @param user
       */
      value: function saveUserToken(user) {
        this.UserService.authUser = user;
        this.store.set("oAuth", user);
      },
      writable: true,
      configurable: true
    },
    getUserToken: {

      /**
       *
       * @returns {*}
       */
      value: function getUserToken() {
        return this.store.get("oAuth");
      },
      writable: true,
      configurable: true
    },
    deleteUserToken: {

      /**
       *
       * @returns {*}
       */
      value: function deleteUserToken() {
        this.UserService.authUser = null;
        return this.store.remove("oAuth");
      },
      writable: true,
      configurable: true
    }
  });

  return AuthService;
})();

module.exports = AuthService;

},{}],28:[function(require,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var AuthService = _interopRequire(require("./auth.service.js"));

var UserService = _interopRequire(require("./user.service.js"));

var SocketIo = _interopRequire(require("./socket.io.service.js"));

angular.module("services", []).service("AuthService", AuthService).provider("$socket", SocketIo).service("UserService", UserService);

},{"./auth.service.js":27,"./socket.io.service.js":29,"./user.service.js":30}],29:[function(require,module,exports){
"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * SocketIoService
 */
var SocketIo = (function () {
  function SocketIo() {
    _classCallCheck(this, SocketIo);

    this.host = "http://localhost:3000";
  }

  _prototypeProperties(SocketIo, null, {
    setHost: {
      value: function setHost(host) {
        this.host = host;
      },
      writable: true,
      configurable: true
    },
    $get: {

      // @ngInject
      value: ["$rootScope", function $get($rootScope) {
        return {

          socket: io.connect(),

          on: function on(eventName, callback) {
            var _this = this;
            this.socket.on(eventName, function () {
              for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
                data[_key] = arguments[_key];
              }

              $rootScope.$apply(function () {
                callback.apply(_this.socket, data);
              });
            });
          },

          emit: function emit(eventName, data, callback) {
            var _this = this;
            this.socket.emit(eventName, data, function () {
              for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
                data[_key] = arguments[_key];
              }

              $rootScope.$apply(function () {
                if (callback) {
                  callback.apply(_this.socket, data);
                }
              });
            });
          },

          removeAllListeners: function removeAllListeners(eventName, callback) {
            var _this = this;
            this.socket.removeAllListeners(eventName, function () {
              for (var _len = arguments.length, data = Array(_len), _key = 0; _key < _len; _key++) {
                data[_key] = arguments[_key];
              }

              $rootScope.$apply(function () {
                callback.apply(_this.socket, data);
              });
            });
          },

          removeListener: function removeListener() {
            this.socket.removeListener(name, fn);
          }
        };
      }],
      writable: true,
      configurable: true
    }
  });

  return SocketIo;
})();

module.exports = SocketIo;

},{}],30:[function(require,module,exports){
"use strict";

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

/**
 * UserService
 */
var UserService =
// @ngInject
["store", function UserService(store) {
  _classCallCheck(this, UserService);

  this.authUser = store.get("oAuth");
}];

module.exports = UserService;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
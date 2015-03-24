(function() {
  'use strict'
  var modules = require('./modules');

  require('./common/field-match.module');

  require('./common/spinner-btn/spinner.btn.module');

  require('./common/password.chars.validator');

  require('./common/wait-me');

  /************************** APP internal modules **********************/

  require('./services/services.index');

  require('./services/$hello.index');

  const app = angular.module(require('./config').appName, modules)

    .config(require('./config/config.index'))

    .factory('authInterceptor', require('./config/auth.interceptor'))

    .run(require('./config/run.phase.js'))

  require('./routes')(app);

  require('./auth/auth.index');

  require('./mainNav/index')(app);

})();



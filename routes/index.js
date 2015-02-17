var home = require('./home.routes');
var auth = require('./auth.server.routes');

function appRoutes( app ) {
  app.use('/', home);
  app.use('/auth', auth);

  return app;
}

module.exports = appRoutes;

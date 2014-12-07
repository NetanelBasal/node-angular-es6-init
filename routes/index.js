var home = require('./home.routes');
var auth = require('./auth.server.routes');
var project = require('./project.server.routes');
var rest = require('./rest.server.routes');

function appRoutes( app ) {
  app.use('/', home);
  app.use('/', rest);
  app.use('/auth', auth);
  app.use('/project', project);

  return app;
}

module.exports = appRoutes;

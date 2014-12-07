var path = require('path');
var walk = require('walk');
var slash = require('slash');
/**
 *
 * @param req
 * @param res
 */
function accountController( req, res ) {

  var files = [];
  var pathToProject = path.join('data', req.session.user.id.toString());
  var walker = walk.walk(pathToProject, {followLinks: false});
  walker.on('file', function( root, stat, next ) {
    files.push(slash(root + '/' + stat.name.replace('.json', '')));
    next();
  });

  walker.on('end', function() {
    return res.status(200).json({rests: files});
  });

}

module.exports = accountController;
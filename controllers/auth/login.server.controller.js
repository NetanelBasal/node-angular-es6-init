var createJwt = require("./../../config/jwt-creator");
var User = require("../../models/User.model");

function LoginController(req, res, next) {
  User.findOne({ 'local.email': req.body.email }, function( err, user ) {
    if( err ) {
      return next(err);
    }
    if( !user ) {
      return res.status(400).json({ message: 'Incorrect username.' });
    }
    if( !user.validPassword(req.body.password) ) {
      return res.status(400).json({ message: 'Incorrect password.' })
    }
    var token = createJwt(user.id);

    return res.status(200).json({
      user: user,
      token: token
    });
  });
}

module.exports = LoginController;
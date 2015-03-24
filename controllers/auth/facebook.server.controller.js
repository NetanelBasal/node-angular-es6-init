var createJwt = require("./../../config/jwt-creator");
var User = require("../../models/User.model");


function facebookController(req, res, next) {
  var body = req.body;

  User.findOne({
    'facebook.id': body.id
  }, function(err, user) {
    if (err) next(err);

    if (user) {
         var token = createJwt(user.facebook.id);
         return res.status(200).json({
          user: body,
          token: token
        });
    }
    if (!user) {
      var newUser = new User();

      newUser.facebook.id = body.id;
      newUser.facebook.name = body.first_name;
      newUser.facebook.email = body.email;

      newUser.save(function(err, user) {
        if (err) next(err);

        var token = createJwt(user.id);

        return res.status(200).json({
          user: body,
          token: token
        });
      });
    }
  })
}

module.exports = facebookController;
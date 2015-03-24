var User = require("../../models/User.model");

function RegisterController(req, res) {
  var user = req.body;
  new User({
    'local.email': user.email,
    'local.firstName': user.firstName,
    'local.password': user.password
  }).save(function(err, user) {
    if (err) return res.status(400).json(err.errors);

    return res.status(200).json(user);
  });

}

module.exports = RegisterController;
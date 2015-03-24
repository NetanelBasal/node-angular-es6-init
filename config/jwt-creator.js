var jwt = require('jwt-simple');
var secret = require("./dev").jwtSecret;
var moment = require("moment");

function createJwt( userId ) {
  return jwt.encode({
    iss: userId,
    exp: moment().add(7, 'days').valueOf()
  }, secret);
}

module.exports = createJwt;
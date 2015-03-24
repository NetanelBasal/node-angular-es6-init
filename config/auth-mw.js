var jwt = require('jwt-simple');
var secret = require("./dev").jwtSecret;
var moment = require("moment");
/**
 * JWT Authentication middleware
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
function authMw( req, res, next ) {

  if( req.headers.authorization ) {
    var token = req.headers.authorization;
    try {
      var decoded = jwt.decode(token, secret);
      if( decoded.exp <= Date.now() ) {
        res.status(400).json({ err: 'Access token has expired' });
      } else {
        req.userId = decoded.iss;
        next();
      }

    } catch( err ) {
      return res.status(401).json({ err: 'Access token invalid' })
    }
  } else {
    return res.status(401).json({ err: 'You dont provide token' })
  }

}

module.exports = authMw;
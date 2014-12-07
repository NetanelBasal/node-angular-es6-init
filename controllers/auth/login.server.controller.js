var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('jsonapi.s3db');

function loginController( req, res) {
  var data = req.body;

  db.get('SELECT * FROM USERS WHERE email = $email' , {$email: data.email}, function( err, user ) {

      if(user && user.password == data.password) {
        delete user.password;
        req.session.user = user;
        res.status(200).json(user);
      } else {
        res.status(401).json({err: "Invalid user"});
      }
  });

}

module.exports = loginController;
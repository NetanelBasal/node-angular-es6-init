var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('jsonapi.s3db');


function registerController(req,res) {
  var data = req.body;
  var fullName = data.firstName + ' ' +  data.lastName;
  db.run("INSERT INTO USERS (email, password, fullName) VALUES (?, ?, ?)", [data.email, data.password, fullName], function(err) {
    if(err) res.status(500).json({error:err})
    else return res.status(200);
  });
}

module.exports = registerController;
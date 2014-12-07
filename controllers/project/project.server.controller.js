var path = require('path');
var randomstring = require("randomstring");
var RestApi = require('./../../classes/RestApi');

function projectController( req, res, next ) {

  var id = req.session.user.id.toString();
  var data = req.body;

  var data = {
    dbPath          : path.join('data', id, data.name),
    numRows         : data.numRows,
    table           : data.table + '.json',
    columnsStructure: data.columns
  }

  var restApi = new RestApi(data);

  restApi.create().then(function(dbPath) {
    res.status(200).json({path: dbPath});
  })

}

module.exports = projectController;
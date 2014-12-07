var path = require('path');
var openDB = require('json-file-db');

function getByIdRest( req, res, next ) {
  var dbPath = path.join('data', req.params.id, req.params.project, req.params.table);

  var db = openDB(dbPath + '.json');

  db.getSingle(Number(req.params.rowId), function(err, data){
    return res.status(200).json(data);
  });
}


module.exports = getByIdRest;
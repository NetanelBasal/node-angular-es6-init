var path = require('path');
var openDB = require('json-file-db');

function deleteRest( req, res, next ) {
  var dbPath = path.join('data', req.params.id, req.params.project, req.params.table);

  var db = openDB(dbPath + '.json');

  db.delete(Number(req.params.rowId), function(err, data){
    return res.json({deleted: true});
  });
}

module.exports = deleteRest;
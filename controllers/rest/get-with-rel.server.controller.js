var path = require('path');
var openDB = require('json-file-db');

function getWithRel( req, res ) {
  var dbPath = path.join('data', req.params.id, req.params.project, req.params.relTable);

  var db = openDB(dbPath + '.json');

  var rel = {};
  rel[req.params.table + 'Id'] = Number(req.params.rowId);

  db.get(rel, function( err, data ) {
    return res.status(200).json(data);
  });
}

module.exports = getWithRel;
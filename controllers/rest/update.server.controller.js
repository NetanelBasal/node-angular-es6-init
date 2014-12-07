var path = require('path');
var openDB = require('json-file-db');

function updateRest( req, res, next ) {
  var dbPath = path.join('data', req.params.id, req.params.project, req.params.table);
  var body = req.body;
  var db = openDB(dbPath + '.json');

  db.getSingle(Number(req.params.rowId), function( err, row ) {
    var prevData = row;
    for( key in body ) {
      prevData[key] = body[key];
    }
    db.delete(row.id, function( err, data ) {
      db.put(prevData, function( err ) {
        return res.json({updated: true});
      });
    });
  });
}

module.exports = updateRest;
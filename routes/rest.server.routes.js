var express = require('express');
var router = express.Router();
var getRest = require('./../controllers/rest/get.server.controller');
var getById = require('./../controllers/rest/get-by-id.server.controller');
var deleteRest = require('./../controllers/rest/delete.server.controller');
var updateRest = require('./../controllers/rest/update.server.controller');
var getWithRel = require('./../controllers/rest/get-with-rel.server.controller');

router.get('/data/:id/:project/:table', getRest);

router.get('/data/:id/:project/:table/:rowId', getById);

router.delete('/data/:id/:project/:table/:rowId', deleteRest);

router.put('/data/:id/:project/:table/:rowId', updateRest);

router.get('/data/:id/:project/:table/:rowId/:relTable', getWithRel)

module.exports = router;
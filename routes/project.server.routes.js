var express = require('express');
var router = express.Router();
var projectController = require('./../controllers/project/project.server.controller');
var account = require('./../controllers/project/account.server.controller');


router.post('/create-project', projectController);

router.get('/account', account);

module.exports = router;
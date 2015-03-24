var express = require('express');
var router = express.Router();
var registerController = require('./../controllers/auth/register.server.controller');
var loginController = require('./../controllers/auth/login.server.controller');
var facebookController = require('./../controllers/auth/facebook.server.controller');
var googleController = require('./../controllers/auth/google.server.controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/facebook', facebookController);
router.post('/google', googleController);

module.exports = router;
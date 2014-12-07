var express = require('express');
var router = express.Router();
var registerController = require('./../controllers/auth/register.server.controller');
var loginController = require('./../controllers/auth/login.server.controller');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/logout', function(req, res) {
  req.session.destroy(function(err) {
    if(!err) res.status(200);
  })
})

module.exports = router;
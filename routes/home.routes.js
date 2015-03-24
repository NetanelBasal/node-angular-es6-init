var express = require('express');
var router = express.Router();
var isAuth = require("./../config/auth-mw");

router.get('/', function( req, res ) {
  res.render('index');
});

router.get('/profile', isAuth, function( req, res ) {
  res.status(200).json({ id: req.userId });
});

module.exports = router;
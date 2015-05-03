var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var mode = process.env.mode || 'dev';
var config = require("./config/" + mode);
var routes = require('./routes/index');

var app = express();
var server = app.listen(config.port);
var io = require('socket.io').listen(server, { origins: '*:*' });

io.sockets.on('connection', function( socket ) {
  socket.emit('message', { message: 'welcome to the chat' });
  socket.on('addPepole', function( data ) {
    io.sockets.emit('addPepole', data);
  });
});

var mongoose = require('mongoose');

mongoose.connect(config.mongo);

app.use(function( req, res, next ) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-  Override, Content-Type, Accept');
  next();
});

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  saveUninitialized: true,
  resave           : true,
  cookie           : {
    maxAge  : 36000000,
    httpOnly: false
  },
  secret           : 'netanel7799@gmail.com'
}));

routes(app);

app.use(function( err, req, res ) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error  : {}
  });
});

module.exports = app;

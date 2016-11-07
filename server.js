'use strict';

const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  fs = require('fs');

// env
let config;
try {
    config = require('./creds.json');   
} catch (e) {
   config = {};
}

// Player schema
const Player = require('./models/player.js');

// require routes
const api = require('./routes/index'),
  player = require('./routes/player');

const app = express();

require('./lib/connection');

// todo: confirm use of this... I think it's for passport
app.set('superSecret', process.env.SECRET || config.secret);

/**
 * Middlewares
 */

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, '', './client/build/favicon.ico')));
app.use(logger('dev'));

// todo: confirm use of the following middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'chocolate rain',
  resave: false,
  saveUninitialized: false
}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

/**
 * Routes
 */

app.use('/', api);
app.use('/players', player);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

module.exports = app;
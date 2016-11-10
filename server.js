/**
 * Dependencies
 */

import express from 'express';
// const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

// require routes
const api = require('./routes/index');
const player = require('./routes/player');

const app = express();

/**
 * Database
 */

require('./lib/connection');

/**
 * Middlewares
 */

app.use(favicon(path.join(__dirname, '', './client/build/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
                extended: false 
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
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/**
 * Error Handlers
 */

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res) => {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}


// production error handler
// no stacktraces leaked to user
app.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

module.exports = app;

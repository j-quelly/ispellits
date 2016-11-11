/**
 * Dependencies
 */

import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import bodyParser from 'body-parser';

// require routes
import api from './routes/index';
import player from './routes/player';

// database
import './lib/connection';

const app = express();

/**
 * Middlewares
 */

app.use(favicon(path.join(__dirname, '', '../client/build/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
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

export default app;

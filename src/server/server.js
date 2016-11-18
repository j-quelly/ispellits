// dependencies
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

const APP = express();

// middleware
APP.use(favicon(path.join(__dirname, '', './src/client/build/favicon.ico')));
APP.use(logger('dev'));
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({
  extended: false
}));

if (process.env.NODE_ENV === 'production') {
  APP.use(express.static('./src/client/build'));
}

// use routes
APP.use('/', api);
APP.use('/players', player);

// catch 404 and forward to error handler
APP.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (APP.get('env') === 'development') {
  APP.use((err, req, res) => {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
APP.use((err, req, res) => {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

export default APP;

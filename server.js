const express = require('express'),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser');

// env
const config = require('./creds.json');

// Player schema
const Player = require('./models/player.js');

// require routes
const api = require('./routes/index'),
  player = require('./routes/player');

const app = express();

require('./lib/connection');

// todo: confirm use of this... I think it's for passport
app.set('superSecret', config.secret); // secr

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

/** 
 * 0.1.0 
 */

// const express = require('express');
// const fs = require('fs');
// const sqlite = require('sql.js');

// const filebuffer = fs.readFileSync('db/usda-nnd.sqlite3');

// const db = new sqlite.Database(filebuffer);

// const app = express();

// app.set('port', (process.env.PORT || 3001));

// // Express only serves static assets in production
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'));
// }

// const COLUMNS = [
//   'carbohydrate_g',
//   'protein_g',
//   'fa_sat_g',
//   'fa_mono_g',
//   'fa_poly_g',
//   'kcal',
//   'description',
// ];
// app.get('/api/food', (req, res) => {
//   const param = req.query.q;

//   if (!param) {
//     res.json({
//       error: 'Missing required parameter `q`',
//     });
//     return;
//   }

//   // WARNING: Not for production use! The following statement
//   // is not protected against SQL injections.
//   const r = db.exec(`
//     select ${COLUMNS.join(', ')} from entries
//     where description like '%${param}%'
//     limit 100
//   `);

//   if (r[0]) {
//     res.json(
//       r[0].values.map((entry) => {
//         const e = {};
//         COLUMNS.forEach((c, idx) => {
//           // combine fat columns
//           if (c.match(/^fa_/)) {
//             e.fat_g = e.fat_g || 0.0;
//             e.fat_g = (
//               parseFloat(e.fat_g, 10) + parseFloat(entry[idx], 10)
//             ).toFixed(2);
//           } else {
//             e[c] = entry[idx];
//           }
//         });
//         return e;
//       })
//     );
//   } else {
//     res.json([]);
//   }
// });

// app.listen(app.get('port'), () => {
//   console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
// });

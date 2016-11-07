/**
 * mongodb connection script
 */

// require mongoose and set the path for connecting 
const mongoose = require('mongoose'),
  creds = require('../creds.json'),
  env = (process.env.NODE_ENV === 'testing' ? creds.testing : creds.dev),
  dbUrl = process.env.MONGODB_URI || 'mongodb://' + env.user + ':' + env.pass + env.host;

// connect to mongo 
mongoose.connect(dbUrl);

// close the Mongoose connection on Control+C 
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

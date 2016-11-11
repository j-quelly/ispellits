/* eslint global-require: 0 */

/**
 * mongodb connection script
 */

// require mongoose and set the path for connecting
import mongoose from 'mongoose';

let config;
try {
  config = require('../creds');
} catch (e) {
  config = {};
}

let dbUrl = `mongodb://${config.dev.user}:${config.dev.pass}${config.dev.host}`;
dbUrl = process.env.MONGODB_URI || dbUrl;

// connect to mongo
mongoose.connect(dbUrl);

// close the Mongoose connection on Control+C
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

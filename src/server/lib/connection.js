/* eslint global-require: 0 */

// require mongoose and set the path for connecting
import mongoose from 'mongoose';

let config;
try {
  config = require('../creds');
} catch (e) {
  config = {};
}

// database URL
let dbUrl = `mongodb://${config.dev.user}:${config.dev.pass}${config.dev.host}`;
dbUrl = process.env.MONGODB_URI || dbUrl;

// connect to mongo
mongoose.connect(dbUrl);

// close the Mongoose connection on ctrl + c
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

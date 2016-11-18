/* eslint global-require: 0 */

// require mongoose and set the path for connecting
import mongoose from 'mongoose';

let config;
let dbUrl;
try {
  config = require('../creds');
  dbUrl = `mongodb://${config.dev.user}:${config.dev.pass}${config.dev.host}`;
} catch (e) {
  config = {};  
}

// db url
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

/**
 * mongodb connection script
 */

let config;

try {
    config = require('../creds');
} catch (e) {
   config = {};
}

// require mongoose and set the path for connecting 
const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI || `mongodb://${config.dev.user}:${config.dev.pass}${config.dev.host}`;

// connect to mongo 
mongoose.connect(dbUrl);

// close the Mongoose connection on Control+C 
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

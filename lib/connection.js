/**
 * mongodb connection script
 */

let creds;
try {
    creds = require('./creds.json');   
} catch (e) {
   creds = {};
}

// require mongoose and set the path for connecting 
const mongoose = require('mongoose'),
  dbUrl = process.env.MONGODB_URI || 'mongodb://' + creds.user + ':' + creds.pass + creds.host;

// connect to mongo 
mongoose.connect(dbUrl);

// close the Mongoose connection on Control+C 
process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected');
    process.exit(0);
  });
});

// dependencies
import express from 'express';

const ROUTER = express.Router();

// api index
// TODO: confirm wheter this is even necessary
ROUTER.get('/', (req, res) => {
  // send a JSON response
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

// expose the route to our app with module.exports
export default ROUTER;

/** 
 * API ROOT
 */

// express server app dependencies 
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

// expose the route to our app with module.exports
module.exports = router;

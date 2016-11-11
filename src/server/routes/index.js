/**
 * API ROOT
 */

// express server app dependencies
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the coolest API on earth!'
  });
});

// expose the route to our app with module.exports
export default router;

/**
 * Player
 */

// express server app dependencies
import express from 'express';
import Player from '../models/player';

const router = express.Router();

/**
 * Create Player
 */
router.post('/', (req, res) => {
  // pass the Player name and score
  Player.create({
    name: req.body.name,
    score: req.body.score
  }, (err) => {
    if (err) {
      res.send(err);
    }

    // todo: if this is to continue to be used then use promises
    // // find all items where the user id matches who's logged in
    // Player.find({
    //     name: req.body.name
    // }, (err, items) => {
    //     // on error
    //     if (err) {
    //         res.send(err);
    //     }

  //     // return the object
  //     // .json sets the headers, yay frameworks!
  //     res.json(items);
  // });
  });
});

/**
 * Read Player
 */
router.get('/', (req, res) => {
  // use mongoose to find all items that match the user
  Player.find({
    name: req.body.name
  }, (err, items) => {
    // if there is an error, send it!
    if (err) {
      res.send(err);
    }

    // return javascript obejct notation
    res.json(items);
  });
});

// expose the route to our app with module.exports
export default router;

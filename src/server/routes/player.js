// dependencies
import express from 'express';
import Player from '../models/player';

const ROUTER = express.Router();

// create player
ROUTER.post('/', (req, res) => {
  // pass the Player name and score
  Player.create({
    name: req.body.name,
    score: req.body.score
  }, (err, player) => {
    if (err) {
      res.send(err);
    }

    // respond with player details
    res.json(player);
  });
});

// get all players
ROUTER.get('/', (req, res) => {
  // use mongoose to find all items that match the user
  Player.find({})
    .sort({
      score: 'desc'
    })
    .limit(5)
    .exec((err, players) => {
      if (err) {
        res.send(err);
      }

      // return player data
      res.json(players);
    });
});

// expose the route to our app with module.exports
export default ROUTER;

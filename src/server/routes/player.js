// dependencies
import express from 'express';
import Player from '../models/player';

const ROUTER = express.Router();

// create player
ROUTER.post('/', (req, res) => {
  // console.log('cat');
  // console.log(req);
  // pass the Player name and score
  Player.create({
    name: req.body.name,
    score: req.body.score
  }, (err, player) => {
    if (err) {
      res.send(err);
    }

    // todo: if this is to continue to be used then use promises
    // as this is bad practice
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

    // respond with player details
    res.json(player);
  });
});

// read a player
// TODO: perhaps this should accept a param /:name or /:id
ROUTER.get('/', (req, res) => {
  // use mongoose to find all items that match the user
  Player.find({
    name: req.body.name
  }, (err, player) => {
    if (err) {
      res.send(err);
    }

    // return player data
    res.json(player);
  });
});

// expose the route to our app with module.exports
export default ROUTER;

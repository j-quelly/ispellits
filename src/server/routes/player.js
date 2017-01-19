// dependencies
import express from 'express';
import Player from '../models/player';

const ROUTER = express.Router();

ROUTER.post('/', (req, res) => {
  Player.create({
    name: req.body.name,
    score: req.body.score
  }, (err, player) => {
    if (err) {
      res.send(err);
    }

    res.status(201).json(player);
  });
});

ROUTER.get('/', (req, res) => {
  Player.find({})
    .sort({
      score: 'desc'
    })
    .limit(5)
    .exec((err, players) => {
      if (err) {
        res.send(err);
      }

      res.status(200).json(players);
    });
});

export default ROUTER;

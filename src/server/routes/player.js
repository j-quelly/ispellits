// dependencies
import express from 'express';
import Player from '../models/player';

const ROUTER = express.Router();

ROUTER.post('/', (req, res) => {
  const name = req.body.name;
  const score = req.body.score;
  const promise = Player.createPlayer(name, score);

  promise.then((response) => {
    res.status(201).json(response);
  }).catch((err) => {
    res.send(err)
  });

});

ROUTER.get('/', (req, res) => {
  const promise = Player.getPlayers();

  promise.then((response) => {
    res.status(200).json(response);
  }).catch((err) => {
    res.send(err)
  });
});

export default ROUTER;

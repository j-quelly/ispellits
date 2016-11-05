/** 
 * Player
 */

// express server app dependencies 
const express = require('express'),
  router = express.Router(),
  Player = require('../models/player.js'); 

/**
 * Create Player
 */
router.post('/', function(req, res) {

    // pass the Player name and score
    Player.create({
        name: req.body.name,
        score: req.body.score
    }, function(err) {
        if (err) {
            res.send(err);
        }

        // find all items where the user id matches who's logged in
        Player.find({
            name: req.body.name
        }, function(err, items) {
            // on error
            if (err) {
                res.send(err);
            }

            // return the object
            // .json sets the headers, yay frameworks!
            res.json(items);
        });

    });
});

/**
 * Read Player
 */
router.get('/', function(req, res) {

    // use mongoose to find all items that match the user
    Player.find({
        name: req.body.name
    }, function(err, items) {
        // if there is an error, send it!
        if (err) {
            res.send(err);
        }

        // return javascript obejct notation
        res.json(items);
    });
});

// expose the route to our app with module.exports
module.exports = router;

// require mongoose for data modeling
import mongoose from 'mongoose';
import Q from 'q';

const Schema = mongoose.Schema;

// define player schema
const PLAYER_SCHEMA = new Schema({
  name: String,
  score: Number
});

PLAYER_SCHEMA.statics.createPlayer = (name, score) => {
  const deferred = Q.defer();

  Player.create({
    name,
    score,
  }, (error, player) => {
    if (error) {
      deferred.reject(new Error(error));
    }

    deferred.resolve(player);
  });

  return deferred.promise;
}

PLAYER_SCHEMA.statics.getPlayers = () => {
  const deferred = Q.defer();

  Player.find({})
    .sort({
      score: 'desc'
    })
    .limit(5)
    .exec((error, players) => {
	    if (error) {
	      deferred.reject(new Error(error));
	    }

    	deferred.resolve(players);
  });

  return deferred.promise;
}

let Player = mongoose.model('Player', PLAYER_SCHEMA);

// first param is the singular name for the collection,
// mongoose automatically looks for the plural version
// so our db will have a 'players' collection
export default Player;

/**
 * User model
 */

// require mongoose for data modeling
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// defines our user schema
const playerSchema = new Schema({
  name: String,
  score: Number
});

// first param is the singular name for the collection,
// mongoose automatically looks for the plural version
// so our db will have a 'players' collection
module.exports = mongoose.model('Player', playerSchema);

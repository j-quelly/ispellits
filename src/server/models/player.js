// require mongoose for data modeling
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// define player schema
const PLAYER_SCHEMA = new Schema({
  name: String,
  score: Number
});

// first param is the singular name for the collection,
// mongoose automatically looks for the plural version
// so our db will have a 'players' collection
export default mongoose.model('Player', PLAYER_SCHEMA);

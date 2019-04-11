import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  id: {
    type: String,
    unique: true, //唯一的
    require: true //必须的
  },
  name: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  score: {
    type: Number
  },
  img: {
    type: String
  },
  ver: { type: String },
  wish: {
    type: Number
  },
  pubDate: {
    type: Number
  }
});
export default mongoose.model('Movie', MovieSchema);

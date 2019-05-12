import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
  tags: {
    type: Array,
    require: true
  },
  comments: {
    type: Array,
    require: true
  }
});
export default mongoose.model('Comment', CommentSchema);

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true, //唯一的
    require: true //必须的
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});
export default mongoose.model('User', UserSchema);

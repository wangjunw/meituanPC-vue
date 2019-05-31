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
  },
  nickname: {
    type: String
  },
  birthday: {
    type: String
  },
  avatar: {
    type: String
  }
});
export default mongoose.model('User', UserSchema);

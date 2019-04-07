import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  id: {
    type: String,
    unique: true, //唯一的
    require: true //必须的
  },
  value: {
    type: String,
    require: true //必须的
  }
});
export default mongoose.model('Province', ProvinceSchema);

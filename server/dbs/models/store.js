import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const StoreSchema = new Schema({
  name: {
    type: String,
    require: true //必须的
  },
  storeId: {
    type: String,
    unique: true,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  openTime: {
    type: String,
    require: true
  },
  service: {
    type: Array
  },
  securityFile: {
    type: Boolean
  },
  score: {
    type: Number,
    require: true
  },
  priceOfOne: {
    type: Number,
    require: true
  },
  images: {
    type: Array
  }
});
export default mongoose.model('Store', StoreSchema);

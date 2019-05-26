import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  detail: {
    type: Object,
    require: true
  },
  cartNo: {
    type: String,
    require: true
  },
  user: {
    type: String,
    require: true
  },
  createTime: {
    type: String,
    require: true
  }
});

export default mongoose.model('Cart', CartSchema);

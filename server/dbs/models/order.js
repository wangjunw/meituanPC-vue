import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  user: {
    type: String,
    require: true
  },
  createTime: {
    type: String,
    require: true
  },
  count: {
    type: Number,
    require: true
  },
  pic: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  total: {
    type: Number,
    require: true
  },
  status: {
    type: Number,
    require: true
  }
});

export default mongoose.model('Order', OrderSchema);

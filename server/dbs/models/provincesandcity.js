import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProvinceSchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  value: {
    type: Array
  }
});

export default mongoose.model('provincesandcity', ProvinceSchema);

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CitySchema = new Schema({
  id: {
    type: String,
    require: true,
    unique: true
  },
  name: {
    type: String,
    require: true
  },
  province: {
    type: String
  }
});

export default mongoose.model('city', CitySchema);

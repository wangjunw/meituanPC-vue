import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const NearbySchema = new Schema({
  id: {
    type: Number
  },
  address: {
    type: String
  },
  phone: {
    type: String
  },
  openTime: {
    type: String
  },
  wifi: {
    type: Number
  },
  //   lng: {
  //     type: Number
  //   },
  //   lat: {
  //     type: Number
  //   },
  brandId: {
    type: Number
  },
  cityId: {
    type: Number
  },
  cityName: {
    type: String
  },
  park: {
    type: String
  },
  name: {
    type: String,
    require: true
  },
  headIcon: {
    type: String
  },
  score: {
    type: Number
  },
  avgPrice: {
    type: Number
  },
  sold: {
    type: Number
  },
  lowestPrice: {
    type: Number
  },
  brandName: {
    type: String
  },
  cityPy: {
    type: String
  }
});
export default mongoose.model('nearby', NearbySchema);
